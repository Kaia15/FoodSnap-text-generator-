import { useContext } from "react";
import { AuthContext } from "../context/context";
// import HouseIcon from '@mui/icons-material/House';
// import SearchIcon from '@mui/icons-material/Search';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import logo from "../images/Threads.png";
import SearchIcon from "../images/search.png";
import CreateIcon from "../images/create.png";
import CommentIcon from "../images/comment.png";

export default function NavBar() {
  const {setOpenPopup} = useContext(AuthContext);
  return (
    <div className="navbar-wrapper">
      <style>
        {`
        .navbar-wrapper {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          top: 0;
          left: 0;
          bottom: 0;
          height: 74px;
          position: sticky;
          z-index: 1;
          font-weight: bold;
          display: flex;
          flex-direction: row;
        }

        .app {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          padding: 25px 12px 16px 12px;
          margin: 0px 0px 19px 0px;
          line-height: 18px;
          font-size: 20px;
          flex: 1;
        }

       .Navbar-links {
          height: 100%;
          display: flex;
          flex-direction: row;
          flex: 2;
        }

       .Navbar-link {
          margin: 4px 0px;
          padding: 16px 0px;
          text-align: left;
          display: flex;
          flex-direction: row;
          gap: 12px;
          flex: 1;
        }

       .Navbar-link img {
          float: center;
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

        .navbar-blank {
          flex: 1;
        }
        `}
      </style>
      <div className="app">
        <img src = {logo} alt = "" width={"32px"} height={"32px"}/>
      </div>
      <div className="Navbar-links">
        <div className="Navbar-link">
          <img src={SearchIcon} alt = "" width={"32px"} height={"32px"}></img>
          {/* <span>Home</span> */}
        </div>
        <div className="Navbar-link">
          <img src={CreateIcon} alt = "" width={"40px"} height={"40px"}></img>
          {/* <span>Search</span> */}
        </div>
        <div className="Navbar-link" onClick={() => {setOpenPopup(true)}}>
        <img src={CommentIcon} alt = "" width={"32px"} height={"32px"}></img>
          {/* <span> Create </span> */}
        </div>
      </div>
      <div className="navbar-blank"></div>
    </div>
      
  )
}