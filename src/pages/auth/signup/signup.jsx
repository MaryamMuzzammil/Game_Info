import { Link } from "react-router-dom";
import { useState } from "react";
import '../../../assets/css/signup.css'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../../../Firebase/config";
import { useNavigate } from "react-router-dom";

const Signup =()=>{
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const validateForm = () => {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("number").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (!username || !email || !phoneNumber || !password) {
            setError("❌ All fields are required!");
            return;
        }

        handleSignup(email, password);
    };

    const handleSignup = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Signup successful");
            navigate("/dashboard");
        } catch (error) {
            console.error("Signup Error:", error);
            setError(`❌ Signup failed: ${error.message}`);
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
            <h2>Sign Up</h2>
            <div className="form">
                <div className="inputBox">
                    <input type="text" id="username" required />
                    <i>Username</i>
                    <span className="error">{error}</span>
                </div>
                <div className="inputBox">
                    <input type="email" id="email" required />
                    <i>Email</i>
                </div>
                <div className="inputBox">
                    <input type="number" id="number" required />
                    <i>Phone Number</i>
                </div>
                <div className="inputBox">
                    <input type="password" id="password" required />
                    <i>Password</i>
                </div>
                <div className="inputBox">
                    <input type="button" value="Signup" onClick={validateForm} />
                </div>
            </div>
        </div>
        </div>
    </section>

        </>
    )
};
export default Signup;