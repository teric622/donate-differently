import React, { Component } from 'react';




export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="loginInfo">
                    <h1>Log In</h1>
                    <form>

                        <input className="inputBox" type="text" name="Email" placeholder="Email Address" />

                        <br />
                        <br />

                        <input className="inputBox" type="password" name="password" placeholder="Password" />

                        <br />
                        <br />

                
                        <br />
                        <button type="button" className="btn btn-link"><b>Forgot your password?</b></button>


                    </form>
                </div>
            </div>
        );
    }
}