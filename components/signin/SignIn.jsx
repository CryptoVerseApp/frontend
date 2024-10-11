import React, { useState } from 'react'
import Logo from '../../app/assets/LogoSym.png'
import './Signin.scss'
import Image from 'next/image'
import { useWallet } from '@/app/hooks/useWallet'
import Link from 'next/link'

const SignIn = ({setMenu}) => {

    const {ensName } = useWallet();
    const [log, setLog] = useState("signin")

  return (
    <div className='signin'>
      <div className="signincontainer">
        <div className="siginin-wrapper">
            <div className="sign-logo">
                <Image src={Logo} alt='IMage here' />
               {log==="signin"? <h2>Sign Up</h2>:<h2>Sign In</h2>}
               {log==="signin"?<p>Create an account with us on our platform and start Learning</p>:<p>Continue where you left off by entering your password</p>}
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                {log==="signin"?                        <input
                            type="text"
                            name="basename"
                            placeholder={ensName ? ensName : "Enter base name"}
                            required
                            disabled={!!ensName}
                        />: ""}

                        {log==="signin"?<input type="email" name="email" placeholder="Email" required />:""}
                        <input type="password" name="password" placeholder="Password" required />
                        {log==="signin"?<p className="linkin">Already have an account? <span onClick={()=>setLog("signup")}>Login</span></p>:<p className="linkin">Do not have an account? <span onClick={()=>setLog("signin")}>Sign Up</span></p>}
                        {log==="signin"?<button type="button" >
                           Signup
                        </button>:<button type="button" >
                           Log In
                        </button>}
                        <button type='button' className='' onClick={()=>setMenu(false)}>
                           Go back
                        </button>
                    </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
