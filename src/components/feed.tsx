import NavBar from "./navbar";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import Popup from "./popup";
import Posts from "./posts";
import Profile from "./profile";
import Toast from "./toast";

export default function Feed() {
  const {openPopup} = useContext(AuthContext);
  return (
    <div className="feed">
      <style>
        {`
          .feed {
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
      <NavBar />
      {/* <Posts /> */}
      <Profile />
      {openPopup && <Popup />}
    </div>
  )
}