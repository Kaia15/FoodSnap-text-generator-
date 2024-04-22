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
            flex-direction: column;
          }
          .posts {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .posts-blank {
            flex: 1;
          }
          .posts-display {
            flex: 2;
          }
          .no-post-screen {
            text-align: center;
          }
          `}
        </style>
        <NavBar />
        <div className="posts">
          <div className="posts-blank"></div>
          <div className="posts-display">
            <p className="no-post-screen">{collection.length <= 0 && "No post yet..."} </p>
            {collection?.map((dish) => {
              return (
                <Post {...dish as dishT} />
              )
            })}
          </div>
          <div className="posts-blank"></div>
        </div>
          
        {openPopup && <Popup />}
      </div>
    )
}