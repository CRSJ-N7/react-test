import { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  
  const [posts, setPost] = useState( 
    [{id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"},
   
  ]);
  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();
    console.log(task)
  }
  
  return (
    <div className="App">
      <form>
        
        <MyInput 
        value={task}
        onChange={e => setTask(e.target.value)}
        type="text" placeholder='Task'
        ></MyInput>

        <MyInput type="text" placeholder='Description'></MyInput>
        <MyButton onClick={addNewTask}>Add Task</MyButton>
      </form>
 <PostList posts={posts} title='Todos'></PostList>
    </div>
  );
}

export default App; 
