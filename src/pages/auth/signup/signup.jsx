import { Link } from "react-router-dom";
import { useState } from "react";
import '../../../assets/css/signup.css'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../../../Firebase/config";
import { useNavigate } from "react-router-dom";

const Signup =()=>{
    const navigate = useNavigate(); // ✅ Initialize navigate
    const [error, setError] = useState(""); // ✅ Store error messages

    const handleGoogleSignup = async () => {
        try {
          await signInWithPopup(auth, googleprovider);
          console.log("Google signup successful");
          navigate("/dashboard");
        } catch (error) {
          console.error("Google Signup Error:", error);
          setError(`❌ Google signup failed: ${error.message}`);
        }
      };
    return(
        <>
        <section className="body">
      <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <span className="box"></span>
        <div className="signin">
            <div className="content">
                <h2>Log In</h2>
                <div className="form">
                    <div className="inputBox">
                        <input type="text" id="username" required/>
                        <i>Username</i>
                        <span id="usernameError" className="error"></span>
                    </div>
                    <div className="inputBox">
                        <input type="email" id="email" required/>
                        <i>Email</i>
                        <span id="emailError" className="error"></span>
                    </div>
                    <div className="inputBox">
                        <input type="number" id="number" required/>
                        <i>Phone Number</i>
                        <span id="pnumberError" className="error"></span>
                    </div>
                    <div className="inputBox">
                        <input type="password" id="password" required/>
                        <i>Password</i>
                        <span id="passwordError" className="error"></span>
                    </div>
                    <div className="links">
                        {/* <Link href="#">Forgot Password</Link> */}
                        {/* <Link to="#">signup</Link> */}
                    </div>
                    <div className="inputBox">
                        <input type="button" value="Signup" onclick="validateForm()"/>
                        <input type="button" value="Signup with google" onClick={handleGoogleSignup}/>

                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
};
export default Signup;