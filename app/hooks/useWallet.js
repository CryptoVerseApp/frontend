// hooks/useWallet.js
import { useState, useEffect } from 'react';
import { ENS } from '@ensdomains/ensjs';

const TARGET_CHAIN_ID = '0x14a34'; // 84532 in hexadecimal

export const useWallet = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [networkError, setNetworkError] = useState('');
    const [ensName, setEnsName] = useState('');

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);

                // Check the network chain ID
                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                if (chainId !== TARGET_CHAIN_ID) {
                    setNetworkError('Please switch to the correct network (chainId: 84532).');
                    setWalletAddress(''); // Clear wallet address on network error
                } else {
                    setNetworkError('');

                    await fetchEnsName(accounts[0]); // Fetch ENS name after successful connection
                }
            } catch (error) {
                console.error("Error connecting to wallet: ", error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    const fetchEnsName = async (address) => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            setEnsName(provider.lookupAddress(address));
        } catch (error) {
            console.error("Error fetching ENS name: ", error);
            setEnsName(''); // Clear ENS name on error
        }
    };

    return {
        walletAddress,
        networkError,
        ensName,
        connectWallet,
    };
};
