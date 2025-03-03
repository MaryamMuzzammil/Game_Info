import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import Signup from "../../../pages/auth/signup/signup";
import { signOut,getAuth } from "@firebase/auth";

const SideBar = () => {

  const navigate = useNavigate(); // ✅ Initialize navigate
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signup")
    } catch (error) {
      console.error("logout error:",error.message)
    }
  }

  return (
    <>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
          <Link  className="nav-link " to="/dashboard">
              <i className="bi bi-grid"></i>
              <span>
              <Link to="/dashboard">Dashboard</Link></span>
              </Link>
          </li>
       
      

        <li className="nav-item">
        <Link  className="nav-link collapsed" to="/offer">
            <i className="bi bi-card-list"></i>
          
            <span> <Link to="/offer">Offer Teams</Link></span>
            </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link collapsed" to="/team">
            <i className="bi bi-card-list"></i>
          
            <span> <Link to="/team">Team Members</Link></span>
            </Link>
        </li>

        <li className="nav-item">
        <Link  className="nav-link collapsed" to="/testimonials">
            <i className="bi bi-card-list"></i>
          
            <span> <Link to="/testimonials">Testimonials</Link></span>
            </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link collapsed" to="/news">
            <i className="bi bi-card-list"></i>
          
            <span> <Link to="/news">News</Link></span>
            </Link>
        </li>
        <li className="nav-itemLogout">
            <button className="nav-link collapsed logout-btn" onClick={handleLogout}>
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Logout</span>
            </button>
          </li>

      </ul>

    </aside >

   </>
)}
export default SideBar;