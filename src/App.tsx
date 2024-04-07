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
      <Feed />
    </div>
  );
}

export default App;
