import React, { useState } from 'react';
import Logo from '../../app/assets/LogoSym.png';
import './Signin.scss';
import Image from 'next/image';
import { useWallet } from '@/app/hooks/useWallet';
import Link from 'next/link';

const SignIn = ({ setMenu }) => {
  const { ensName } = useWallet();
  const [log, setLog] = useState("signin");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [basename, setBasename] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      basename: ensName || basename,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signin">
      <div className="signincontainer">
        <div className="siginin-wrapper">
          <div className="sign-logo">
            <Image src={Logo} alt="Logo here" />
            {log === "signin" ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
            {log === "signin" ? (
              <p>Create an account with us on our platform and start learning</p>
            ) : (
              <p>Continue where you left off by entering your password</p>
            )}
          </div>

          <form onSubmit={handleSignup}>
            {log === "signin" && (
              <>
                <input
                  type="text"
                  name="basename"
                  value={ensName || basename}
                  onChange={(e) => setBasename(e.target.value)}
                  placeholder={ensName ? ensName : "Enter base name"}
                  required
                  // disabled={!!ensName} 
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </>
            )}

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}

            {log === "signin" ? (
              <button type="submit">Sign Up</button>
            ) : (
              <button type="submit">Log In</button>
            )}

            <p className="linkin">
              {log === "signin" ? (
                <>
                  Already have an account?{" "}
                  <span onClick={() => setLog("signup")}>Login</span>
                </>
              ) : (
                <>
                  Do not have an account?{" "}
                  <span onClick={() => setLog("signin")}>Sign Up</span>
                </>
              )}
            </p>

            <button type="button" onClick={() => setMenu(false)}>
              Go back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
