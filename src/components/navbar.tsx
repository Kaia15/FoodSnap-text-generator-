import { useContext } from "react";
import { AuthContext } from "../context/context";
import logo from "../images/logo.png";

import { Home, Search, Favorite, Person, Menu, AddCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";

const NavBar = () => {
  const {setOpenPopup,setOpenAppearance,openAppearance,theme} = useContext(AuthContext);
  return (
    <div className="navbar">
      <style>
        {`
        /* NavBar.css */
        .navbar {
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 0;
          left: 0;
          bottom: 0;
          height: 50vh;
          position: sticky;
          z-index: 1;
          // padding-top: 20px;
          flex: 1;
        }
        
        .icon {
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }

        .icon.light {
          color: gray;
        }

        .icon.dark {
          color: white;
        }

        .icon-link {
          text-decoration: none;
          color: inherit;
        }
        
        .icon:hover {
          color: black;
        }
        
        .icon .at-icon {
          font-size: 24px;
          font-weight: bold;
          color: black;
        }
        
        .icon:first-child {
          margin-bottom: 40px;
        }
        
        .icon svg {
          font-size: 24px;
        }
        
        .icon:first-child svg {
          font-size: 30px;
        }
        
        .icon:nth-child(2) {
          color: black; /* Active home icon */
        }        
        `}
      </style>
      <img src={logo} alt="" className="icon"/>
      <div className={`icon ${theme}`}>
        <Link to="/" className="icon-link">
          <Home />
        </Link>
      </div>
      <div className={`icon ${theme}`}>
        <Search />
      </div>
      <div className={`icon ${theme}`}>
        <Favorite />
      </div>
      <div className={`icon ${theme}`} onClick={() => setOpenPopup(true)}>
        <AddCircle />
      </div>
      <div className={`icon ${theme}`}>
        <Link to="/profile" className="icon-link">
        <Person />
        </Link>
      </div>
      <div className={`icon ${theme}`} onClick={() => setOpenAppearance(!openAppearance)}>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;