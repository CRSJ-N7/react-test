import { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem value={"2222"} item={{ title: 0 }} number={1}></PostItem>
    </div>
  );
}

export default App;
