import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (<>
    <div className={styles.container}>
        <div className={styles.login}>
            <h1>Login to your account</h1>
            <form action='/user/login' method='post' className={styles.loginform}>
                <input type="email" placeholder='Email' className={styles.email} required/>
                <input type="password" placeholder='Password' required/>
                <button type="submit">Log In</button>
            </form>
        </div>
        <div className={styles.signup}>
            <h1>Don’t have an account?</h1>
            <h2>Sign Up below</h2>
            <form action='/user/signup' method='post' className={styles.signup}>
                <input type='text' placeholder='Full Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
  </>)
}

export default Login