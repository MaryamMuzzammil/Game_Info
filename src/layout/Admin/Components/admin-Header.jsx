import logo from '../assets/img/logo.png'
import image4 from '../assets/img/profile-img.jpg'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/config"; // Import Firebase Auth
import { onAuthStateChanged, signOut } from "firebase/auth";
const AdminHeader = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Define useNavigate inside the component

  // Fetch user from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/signin");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
  }, [sidebarOpen]);
  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <span className="d-none d-lg-block"></span>
            <i
              className="bi bi-list toggle-sidebar-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            ></i>
          </a>

        </div>

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>

              </ul>

            </li>
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={user?.photoURL || image4} // Show user's profile image or default
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                {user ? user.displayName || user.email.split("@")[0] : "Guest"}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                <h6>{user ? user.displayName || user.email.split("@")[0] : "Guest"}</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                {user && (
                  <>
                   

                    <li>
                      <button className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </li>

          </ul>
        </nav>

      </header>
    </>
  );
}
export default AdminHeader;