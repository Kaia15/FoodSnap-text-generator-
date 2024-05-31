import { Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import ProfileFeed from "./pages/profilefeed";
import { useContext } from "react";
import { AuthContext } from "./context/context";

function App() {
  return ( 
    <div className="App"> 
    <Routes>
    <Route path="/" Component={Feed} />
    <Route path="/profile" Component={ProfileFeed} />
    </Routes>
    </div> 
  )
}

export default App;
