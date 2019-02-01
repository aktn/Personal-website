import React, { Component } from "react";
import "./App.css";
import Info from "./containers/info/info";
import PostForm from "./containers/post/postForm";
import PostsList from "./containers/post/postsList";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/post/new" component={PostForm} />
          <Route path="/post/posts" component={PostsList} />
          <Route path="/post/:id" component={PostForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
