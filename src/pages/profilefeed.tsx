import { useContext } from "react";
import { AuthContext } from "../context/context";
import NavBar from "../components/navbar";
import Popup from "../components/popup";
import Profile from "../components/profile";

export default function ProfileFeed() {
  const {openPopup,theme} = useContext(AuthContext);
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
      <Profile />
      {openPopup && <Popup />}
    </div>
  )
}