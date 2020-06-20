import React, { Component } from 'react'
import './Account.css'
import { Link } from 'react-router-dom'

class Account extends Component {
    render() {
        return (
            <div className="loginContainer">
                <form className="LoginInfo" method="post" action="">
                    <h1>Account Info</h1>
                    <div className="formInfo">
                    <br />
                    <br />
                       <p>Enter Your Email</p>
                       <input type='text' placeholder="Email" required/>
                       <br />
                       <br />
                       <p>Enter Your Password</p>
                       <input type='password' placeholder="Password" required/>
                      </div>
                      <div>
                        <label className="rememberMe" for="rememberMe">
                            <input type='checkbox'/> Remember Me
                       </label>
                    </div>
                    <br />
                      <Link to='/passwordrenew'>
                         <p className="forgotPassword">Forgot your password?</p>
                      </Link>
                        <button className="button-btn">Sign In</button>
                        {/* <br /> */}
                       <Link to='/register'>   
                         <p className="signUpLink">Don't have an account? Sign up!</p>
                       </Link>
                       <br />
                </form>
            </div> 
        )
    }
}

export default Account
