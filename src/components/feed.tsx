import NavBar from "./navbar";
import Post from "./post";
import { dishT } from "../utils/types";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { useCollectionFetch } from "../hooks/useCollectionFetch";
import Popup from "./popup";

export default function Feed() {
    const {collection} = useCollectionFetch();
    const {openPopup} = useContext(AuthContext);

    console.log(collection);
    return (
        <div className="feed">
        <style>
        {`
          .feed {
            display: flex;
            flex-direction: row;
          }
          .posts {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 8;
          }
          
          `}
        </style>
        <NavBar />
        <div className="posts">
        {collection?.map((dish) => {
          return (
            <Post {...dish as dishT} />
          )
        })}
        </div>
        {openPopup && <Popup />}
      </div>
    )
}