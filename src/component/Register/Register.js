import React, { Component } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

 class Register extends Component {
    render() {
        return (

         <div className="loginContainer">
            <form className="LoginInfo" method="post" action="">
                <h1>Register</h1>
                <div className="formInfo1">
                   <br />
                   <br />
                   <p>First Name</p>
                   <input type='text' placeholder="First Name" required/>
                   <br />
                   <br />
                   <p>Last Name</p>
                   <input type='text' placeholder="Last Name" required/>
                   <br />
                   <br />
                   <p>Enter Your Email</p>
                   <input type='text' placeholder="Email" required/>
                   <br />
                   <br />
                   <p>Enter Your Password</p>
                   <input type='password' placeholder="Password" required/>
                   <br />
                   <br />
                   <p>Re-Enter Your Password</p>
                   <input type='password' placeholder="Password" required/>
                </div>
                <br />
                    <button className="button-btn1">Register</button>
                    {/* <br /> */}
                   <Link to='/account'>   
                     <p className="signInLink">Already have an account? Sign In!</p>
                   </Link>
                   <br />
            </form>
        </div>
        )
    }
}

export default Register
