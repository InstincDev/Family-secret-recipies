import React from 'react'
import "./Login.css"

const Login = () => {

    const google = ()=>{
        window.open("http://localhost:7575/auth/google", "_self")
       }


  return (
    <div className="login">
    <h1 className="loginTitle">Choose a Login Method</h1>
    <div className="wrapper">
        <div className="left">
            <div className="loginButton facebook" >
                <img
                    src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="icon"
                />
                Instagram
            </div>
            <div className="loginButton google" onClick={google} >
                <img
                    src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="icon"
                />
                Google
            </div>
            <div className="loginButton github" >
                <img
                    src="https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="icon"
                />
                GitHub
            </div>
        </div>
        <div className="center">
            <div className="line" />
            <div className="or">OR</div>
        </div>
        <div className="right">
            <input type="text" className='thisOne' placeholder="Username" />
            <input type="text" className='thisOne' placeholder="Password" />
            <button className="submit">Login</button>
        </div>
    </div>
</div>
  )
}

export default Login