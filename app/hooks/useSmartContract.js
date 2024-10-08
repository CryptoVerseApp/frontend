// hooks/useSmartContract.js
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../assets/abi';

const useSmartContract = (contractAddress) => {
    const [contract, setContract] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContract = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contractInstance = new ethers.Contract(contractAddress, abi, signer);
                setContract(contractInstance);
            } else {
                setError('Ethereum provider not found. Please install MetaMask.');
            }
        };

        loadContract();
    }, [contractAddress, abi]);

    const register = async (data) => {
        try {
            const tx = await contract.enroll(data);
            await tx.wait(); // Wait for the transaction to be mined
            return tx;
        } catch (err) {
            setError(err.message);
            console.error('Create Error:', err);
        }
    };

    const courses = async () => {
        try {
            const result = await contract.viewCourses();
            return result;
        } catch (err) {
            setError(err.message);
            console.error('Read Error:', err);
        }
    };

    return {
        contract,
        error,
        register,
        courses
    };
};

export default useSmartContract;
