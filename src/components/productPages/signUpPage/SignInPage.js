import React from 'react'
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className='main-container'>
      <a className='amazon-logo' href="###"><img src="/images/amazon-logo2.webp" /></a>
      <div className='sign-in-page'>
        <p className='signin-logo'>Sign in</p>
        <div className='email-mobile-input'>
          <label>Enter mobile phone number or email</label>
          <input className='email-input' type="text"></input>
          <button className='login-btn'>Continue</button>
        </div>
        <span className='terms-conditions'>By continuing, you agree to Amazon's <a href="####">Conditions of Use </a>and<a href="####"> Privacy Notice</a>.</span>
        <details className='login-help'>
          <summary>Need help?</summary>
          <ul>
            <a href="#"><li>Forgot Password</li></a>
            <a href="##"><li>Other issues with Sign-In</li></a>
          </ul>
        </details><br></br>
        <hr></hr>
      </div>

      <div className='signup-link'>
        <hr style={{width: 60}}/>
        <p>New to Amazon?</p>
        <hr style={{width: 60}}/>
      </div>
      <button id="signup-btn"><a href="#####">Create your Amazon account</a></button>
    </div>
  )
}

export default SignInPage
