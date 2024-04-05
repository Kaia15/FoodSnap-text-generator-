import { useEffect, useState } from "react";
import { useCollectionFetch } from "./hooks/useCollectionFetch";
import { descriptionT } from "./hooks/types";
import { getDishDescription } from "./utils/requests";
import Popup from "./components/popup";
import Post from "./components/post";
import { dishT } from "./utils/types";
import NavBar from "./components/navbar";
import Feed from "./components/feed";

function App() {
  return (
    <div className="App">
      {/* {collection.map((item) => (
        <div>
          {item?.description}
        </div>
      ))} */}
      {/* <button onClick={() => generateDescription(imageUrl)}> Generate Description </button>
      {description ? <div> {description.message.content} </div> : <div></div>} */}
      {/* <Popup /> */}
      <Feed />
    </div>
  );
}

export default App;
