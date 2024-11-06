import "./login.css"
import assets from "../../asset/assets"
import { useState } from "react"
const Login = () => {

    const [currentState, setCurrentState] = useState("Sign Up")
   
    const handleBtn = () => {
        currentState === "Sign Up" ? setCurrentState("Login") : null
    }
 return (
  <div>
   <div className="conatiner">
    <div className="login">
    <div className="logo-container">
        <img src={assets.chat_logo} alt="" className="logo" />
        <h2>Talk App</h2>
    </div>

    <div className="login-form">
     <h2>{currentState}</h2>
     <div className="login_info">
         {currentState === "Sign Up"? <input type="text" placeholder="enter your name" required/> : null}
         <input type="email" name="" id="" placeholder="enter your email" required/>
         <input type="password" placeholder="enter your password" name="" id="" required/>
         <button type="submit" onClick={() => handleBtn()}>{currentState === "Sign Up" ? "Create Account" : "Login  Now"}</button>
         
     </div>
     <div className="login-term">
      <input type="checkbox"/>
      <p>Agree to the terms of use & privacy policy</p>
     </div>
     <div className="login-forgot">
        <p className="login-toggle">
        {/* {currentState === "Sign Up" ?"Already have an account" : "Create an account"} <span onClick={() => setCurrentState("Login")}>click here</span>
        {currentState === "Sign Up" ?"Already have an account" : "Create an account"} <span onClick={() => setCurrentState("Login")}>click here</span> */}

        {
        currentState === "Sign Up" 
        ? <p>Already have an account <span onClick={() => setCurrentState("Login")}>click here</span></p>
        : <p>Create an account <span onClick={() => setCurrentState("Sign Up")}>click here</span></p>
}
        </p>
     </div>
    </div>
    </div>
   </div>
  </div>
 )
}

export default Login

