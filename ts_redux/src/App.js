import React from 'react';
import './App.css';
import Post from './Components/Post';
import PostForm from './Components/PostForm';
import {Provider} from 'react-redux'
import store from './store'

// const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <PostForm/>
    <hr/>
      <Post/>
    </div>
    </Provider>
  );
}

export default App;
