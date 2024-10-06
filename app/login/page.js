import Image from "next/image";
import SigninHero from '../assets/login.png'
import './SignIn.scss'
import Link from "next/link";

export default function SignIn () {
    return (
        <div className="signin">
            <div className="signin-container">
                <div className="signin-hero">
                    <Image src={SigninHero} alt="Image here" />
                </div>
                <div className="sign-right">
                    <h2>Connect Wallet</h2>
                    <p>Connect your wallet to our platform and start Learning</p>
                    <form>
                        <input type="text" name="basename" placeholder="Base Name" />
                        <button>Connect</button>
                    </form>
                    <p className="linkin">Don&apos;t have an account? <Link href='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}