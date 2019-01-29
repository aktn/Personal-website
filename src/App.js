import React, { Component } from "react";
import "./App.css";
import Info from "./containers/info/info";
import PostForm from "./containers/post/postForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
      </div>
    );
  }
}

export default App;
