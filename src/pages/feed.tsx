import { useContext } from "react";
import { AuthContext } from "../context/context";
import Posts from "../components/posts";
import Popup from "../components/popup";
import NavBar from "../components/navbar";
import AppearancePopUp from "../components/appearance";

export default function Feed() {
  const {openPopup, openAppearance, theme} = useContext(AuthContext);
  return (
    <div className={`feed ${theme}`}>
      <style>
        {`
          .feed {
            display: flex;
            flex-direction: row;
          }

          .feed.light {
            background-color: white;
          }

          .feed.dark {
            background-color: black;
          }
        `}
      </style>
      <NavBar />
      <Posts />
      {/* <Profile /> */}
      {openPopup && <Popup />}
      {openAppearance && <AppearancePopUp />}
    </div>
  )
}