import { useContext } from "react";
import { AuthContext } from "../context/context";
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function NavBar() {
  const {setOpenPopup} = useContext(AuthContext);
  return (
    <div className="navbar-wrapper">
      <style>
        {`
        .navbar-wrapper {
          flex: 2;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          top: 0;
          left: 0;
          bottom: 0;
          height: 100vh;
          position: sticky;
          z-index: 1;
          font-weight: bold;
          padding: 8px 12px 0px 12px;
        }

        .app {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          padding: 25px 12px 16px 12px;
          margin: 0px 0px 19px 0px;
          line-height: 18px;
          font-size: 20px;
        }

       .Navbar-links {
          height: 100%;
        }

       .Navbar-link {
          margin: 4px 0px;
          padding: 16px 0px;
          text-align: left;
          display: flex;
          flex-direction: row;
          gap: 12px;
        }

       .Navbar-link span {
          height: 100%;
          color: #333;
          text-decoration: none;
          font-size: 16px;
          line-height: 18px;
          margin: 5px;
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
      <div className="app">
        Foodsnap
      </div>
      <div className="Navbar-links">
        <div className="Navbar-link">
          <HouseIcon fontSize="large"/>
          <span>Home</span>
        </div>
        <div className="Navbar-link">
          <SearchIcon fontSize="large"/>
          <span>Search</span>
        </div>
        <div className="Navbar-link" onClick={() => {setOpenPopup(true)}}>
          <AddCircleOutlineIcon fontSize="large"/>
          <span> Create </span>
        </div>
      </div>
    </div>
      
  )
}