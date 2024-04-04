import { useEffect, useState } from "react";
import { useCollectionFetch } from "./hooks/useCollectionFetch";
import { descriptionT } from "./hooks/types";
import { getDishDescription } from "./utils/requests";
import Popup from "./components/popup";

function App() {
  // const { collection, setCollection } = useCollectionFetch();

  return (
    <div className="App">
      {/* {collection.map((item) => (
        <div>
          {item?.description}
        </div>
      ))} */}
      {/* <button onClick={() => generateDescription(imageUrl)}> Generate Description </button>
      {description ? <div> {description.message.content} </div> : <div></div>} */}
      <Popup />
    </div>
  );
}

export default App;
