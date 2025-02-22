import logo from "../../../../assets/images/logo.png";
import '../../../../assets/css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto md-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <Link className="nav-link active anchor" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link anchor" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link anchor" to="/sports">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item dropdown fw-bold">
                <Link
                  className="nav-link dropdown-toggle anchor"
                  to="#Sports"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GAMES
                </Link>
                <ul className="dropdown-menu sport" aria-labelledby="navbarDropdownMenuLink">
                  {[
                    "Football",
                    "Badminton",
                    "Athletics",
                    "Chess",
                    "Judo",
                    "Swimming",
                    "Volleyball",
                    "Tennis",
                    "Golf",
                    "Billiards",
                    "Motorcycling",
                  ].map((game) => (
                    <li key={game}>
                      <Link className="dropdown-item sports" to={`/sports#${game}`}>
                        {game}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link anchor" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item login-btn">
                <Link to="/signin" className="btn btn-warning fw-bold">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
