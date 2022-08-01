import { useState } from 'react';
import Box from './Box';
import './App.css';

function App() {
  const [posts,setPosts] = useState([1,1,1]);
  const [width,setWidth] = useState(100);
  const [height,setHeight] = useState(50);

  function hadlerAddBlock(){
    setPosts([...posts,1]) 
  }

  function hadlerDeleteBlock(){
    setPosts(posts.slice(0,-1))
  }

  function hadlerAddBlock(){
    setPosts([...posts,1])  
  }

  function handleAddWidth(){
    setWidth(width+10)
  }

  function handleReduceWidth(){
    setWidth(width-10)
  }

  function handleAddHeight(){
    setHeight(height+10)
  }

  function handleReduceHeight(){
    setHeight(height - 10)
  }


  return (
    <div className="App">
      <div style={{margin:"10px auto"}}>Block count: {posts.length}</div>
      <button style={{width:"40px",height:"40px",cursor:"pointer",fontSize:"18px"}} onClick={hadlerAddBlock}> + </button>
      <button style={{width:"40px",height:"40px",cursor:"pointer",fontSize:"18px"}} onClick={hadlerDeleteBlock}> - </button>
      <div style={{margin:"10px auto"}}>Block width: {width}px</div>
      <button 
        onClick={handleAddWidth}
        style={{
          width:"60px",
          height:"40px",
          cursor:"pointer"}}
          >+ 10px</button>
      <button 
      onClick={handleReduceWidth}
        style={{
          width:"60px",
          height:"40px",
          cursor:"pointer"}}>- 10px</button>
      <div style={{margin:"10px auto"}}>Block height:{height}px</div>
      <button
        onClick={handleAddHeight} 
        style={{width:"60px",height:"40px",cursor:"pointer"}}>+ 10px</button>
      <button
        onClick={handleReduceHeight} 
        style={{width:"60px",height:"40px",cursor:"pointer"}}>- 10px</button>
      {(posts.map((e,index) => (
        <Box width={width} height={height} key={index}/>
      ))
      )}
    </div>
  );
}

export default App;
