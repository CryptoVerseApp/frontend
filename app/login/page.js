import Image from "next/image";
import SigninHero from '../assets/login.png'
import './SignIn.scss'
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignIn () {
    return (
        <>
        <Navbar />
        <div className="signin">
            <div className="signin-container">
                <div className="signin-hero">
                    <Image className="image" src={SigninHero} alt="Image here" />
                </div>
                <div className="sign-right">
                    <h2>Login</h2>
                    <p>Enter your password to start Learning</p>
                    <form>
                        <input type="password" name="Password" placeholder="Enter your password" />
                        <button>Login</button>
                    </form>
                    <p className="linkin">Don&apos;t have an account? <Link href='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
        </>
    )
}