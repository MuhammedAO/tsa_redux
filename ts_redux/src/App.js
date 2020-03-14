import React from 'react';
import './App.css';
import Post from './Components/Post';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="App">
    <PostForm/>
    <hr/>
      <Post/>
    </div>
  );
}

export default App;
