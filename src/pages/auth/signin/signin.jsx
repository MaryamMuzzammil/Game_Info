import { Link } from "react-router-dom";
import { useState } from "react";
import "../../../assets/css/signin.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../../../Firebase/config";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../../assets/images/googlelogo.png";

const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Handle Email & Password Login
  const handleLogin = async () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      setError("❌ All fields are required!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, username, password);
      console.log("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setError(`❌ Login failed: ${error.message}`);
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      googleprovider.setCustomParameters({ prompt: "select_account" });
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
     <span className="box">
     <Link to="/">
        <i class="arrowbutton fa-solid fa-arrow-left-long"></i></Link></span>
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
          <input type="text" id="username" required />
          <i>Email</i>
        </div>
        <div className="inputBox">
          <input type="password" id="password" required />
          <i>Password</i>
        </div>
        <div className="links">
          <Link to="#">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">Create an account</Link>
        </div>
        <div className="inputBox">
          <button onClick={handleLogin} className="btn btn-warning">Login</button>
        </div>
        <div className="inputBox">
          <button className="google-btn" onClick={handleGoogleSignup}>
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
            Signup with Google
          </button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
    </section>

        </>
    )
};
export default Signin;