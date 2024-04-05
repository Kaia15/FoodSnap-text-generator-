import { useContext } from "react";
import { AuthContext } from "../context/context";

export default function NavBar() {
  const {openPopup, setOpenPopup} = useContext(AuthContext);
  return (
    <div className="navbar-wrapper">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');
        .navbar-wrapper {
          flex: 2;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          top: 0;
          left: 0;
          bottom: 0;
          height: 100vh; /* set the height to 100% of the viewport height */
          position: sticky;
          z-index: 1;
          font-weight: bold;
        }

       .Navbar-links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

       .Navbar-link {
          margin: 10px 0;
        }

       .Navbar-link a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #333;
          text-decoration: none;
          font-size: 14px;
          line-height: 20px;
        }

       .Navbar-link a:hover {
          text-decoration: underline;
        }

       .Navbar-link.active a {
          font-weight: bold;
        }

       .Navbar-profile-picture {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          margin: 10px;
        }
        `}
      </style>
      <div className="Navbar-links">
        <div className="Navbar-link">
          <a href="/">Home</a>
        </div>
        <div className="Navbar-link">
          <a href="/">Search</a>
        </div>
        <div className="Navbar-link">
          <a onClick={() => {setOpenPopup(true)}}>Add</a>
        </div>
      </div>
    </div>
      
  )
}