"use client";

import Image from "next/image";
import SigninHero from '../assets/login.png';
import Link from "next/link";
import '../login/SignIn.scss';
import { useWallet } from '../hooks/useWallet'; // Import your custom hook

export default function SignUp() {
    const { walletAddress, networkError, connectWallet } = useWallet(); // Use the custom hook

    return (
        <div className="signin">
            <div className="signin-container">
                <div className="signin-hero">
                    <Image src={SigninHero} alt="Image here" />
                </div>
                <div className="sign-right">
                    <h2>Sign Up</h2>
                    <p>Create an account with us on our platform and start Learning</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="basename" placeholder="Base Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="button" onClick={connectWallet}>
                            {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                        </button>
                        {networkError && <p className="error-message">{networkError}</p>}
                    </form>
                    <p className="linkin">Already have an account? <Link href='/login'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
}
