import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.css';

const Login = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Successful response
      toast.success('Signup successful!');
      // Optionally: Handle the successful response, e.g., redirect the user

      usernameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
    } catch (error) {
      console.error('Error during signup:', error);
      // Error response
      toast.error('Error during signup. Please try again.');
      // Optionally: Show an error message to the user
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <h1>Login to your account</h1>
          <form action='/user/login' method='post' className={styles.loginform}>
            <input type='email' placeholder='Email' className={styles.email} required />
            <input type='password' placeholder='Password' required />
            <button type='submit'>Log In</button>
          </form>
        </div>
        <div className={styles.signup}>
          <h1>Don’t have an account?</h1>
          <h2>Sign Up below</h2>
          <form onSubmit={handleSubmit} method='post' className={styles.signup}>
            <input type='text' ref={usernameRef} placeholder='Full Name' />
            <input type='email' ref={emailRef} placeholder='Email' />
            <input type='password' ref={passwordRef} placeholder='Password' />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </>
  );
};

export default Login;
