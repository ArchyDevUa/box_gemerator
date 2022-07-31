import { useState } from 'react';
import Box from './Box';
import './App.css';

function App() {
  const [posts,setPosts] = useState([1,1,1]);

  function hadlerAddBlock(){
    setPosts([...posts,1])
    console.log(posts)
  }

  function hadlerDeleteBlock(){
    setPosts(posts.slice(0,-1))
    console.log(posts)
  }

  function hadlerAddBlock(){
    setPosts([...posts,1])
    console.log(posts)
  }

  return (
    <div className="App">
      <button onClick={hadlerAddBlock}> + </button>
      <button onClick={hadlerDeleteBlock}> - </button>
      {(posts.map((e,index) => (
        <Box key={index}/>
      ))
      )}
    </div>
  );
}

export default App;
