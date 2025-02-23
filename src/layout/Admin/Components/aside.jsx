import { Link } from "react-router-dom";

const SideBar = () => {

  return (
    <>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
       
      

        <li className="nav-item">
          <a className="nav-link collapsed" >
            <i className="bi bi-card-list"></i>
          
            <span> <Link to="/books">Books</Link></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span><Link to="/upload">Upload</Link></span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
        </li>

      </ul>

    </aside >

   </>
)}
export default SideBar;