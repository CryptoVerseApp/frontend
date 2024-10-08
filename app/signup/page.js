"use client";

import Image from "next/image";
import SigninHero from '../assets/login.png';
import Link from "next/link";
import '../login/SignIn.scss'
import { useWallet } from "../hooks/useWallet";

export default function SignUp() {
    const { walletAddress, networkError, connectWallet } = useWallet(); // Use the custom hook

    return (
        <>
        <Navbar />
        <div className="signin">
        <div className="signin-container">
            <div className="signin-hero">
                <Image src={SigninHero} alt="Image here" />
            </div>
            <div className="sign-right">
                <h2>Sign Up</h2>
                <p>Create an account with us on our plartform and start Learning</p>
                <form>
                    <input type="text" name="basename" placeholder="Base Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Connect</button>
                </form>
                <p className="linkin">Already have an account? <Link href='/login'>SignUp</Link></p>
            </div>
        </div>
    </div>
    </>
    )
}
