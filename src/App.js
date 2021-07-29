import React from 'react'
import PostsList from './features/post/postsList'
import {AddPostForm} from './features/post/AddPostForm'

function App() {
  return (
    <div className="App">
      <AddPostForm></AddPostForm>
      <PostsList />
    </div>
  );
}

export default App;
