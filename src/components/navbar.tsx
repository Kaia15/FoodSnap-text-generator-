import { useContext } from "react";
import { AuthContext } from "../context/context";
import logo from "../images/logo.png";
import SearchIcon from "../images/search.png";
import CreateIcon from "../images/create.png";
import CommentIcon from "../images/comment.png";

// export default function NavBar() {
//   const {setOpenPopup} = useContext(AuthContext);
//   return (
//     <div className="navbar-wrapper">
//       <style>
//         {`
//         .navbar-wrapper {
//           // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           background-color: rgba(255, 255, 255, 0.85);
//           top: 0;
//           left: 0;
//           bottom: 0;
//           height: 100%;
//           position: sticky;
//           z-index: 1;
//           font-weight: bold;
//           display: flex;
//           flex-direction: column;
//         }

//         .app-logo {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           padding: 25px 12px 16px 12px;
//           margin: 0px 0px 19px 0px;
//           line-height: 18px;
//           font-size: 20px;
//           flex: 1;
//         }

//         .Navbar-links-wrapper {
//           flex: 2;
//         }

//        .Navbar-links {
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//        .Navbar-link {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//         }

//        .Navbar-profile-picture {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 10px;
//         }

//         .navbar-blank {
//           flex: 1;
//         }
//         `}
//       </style>
//       <div className="app-logo">
//         <img src = {logo} alt = "" width={"40px"} height={"40px"}/>
//       </div>
//       <div className="Navbar-links-wrapper">
//         {/* <div className="Navbar-links">
          
//         </div> */}
//         <div className="Navbar-link">
//             <img src={SearchIcon} alt = "" width={"28px"} height={"28px"}></img>
//             {/* <span>Home</span> */}
//           </div>
//           <div className="Navbar-link" onClick={() => setOpenPopup(true)}>
//             <img src={CreateIcon} alt = "" width={"36px"} height={"36px"}></img>
//             {/* <span>Search</span> */}
//           </div>
//       </div>
//       <div className="navbar-blank"></div>
//     </div>
      
//   )
// }

import { Home, Search, Favorite, Person, Timer, Menu, AddCircle } from '@mui/icons-material';

const NavBar = () => {
  const {setOpenPopup} = useContext(AuthContext);
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
          height: 100vh;
          position: sticky;
          z-index: 1;
          // padding-top: 20px;
          flex: 1;
        }
        
        .icon {
          margin: 20px 0;
          color: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
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
      <div className="icon">
        <Home />
      </div>
      <div className="icon">
        <Search />
      </div>
      <div className="icon">
        <Favorite />
      </div>
      <div className="icon" onClick={() => setOpenPopup(true)}>
        <AddCircle />
      </div>
      <div className="icon">
        <Person />
      </div>
      <div className="icon">
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;