import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./App.css";

import Info from "./containers/info/info";
import PostForm from "./containers/post/postForm";
import PostsList from "./containers/post/postsList";
import Home from "./containers/home/home";
import ProjectForm from "./containers/project/projectForm";
import Login from "./containers/login/login";
import * as actions from "./store/actions/index";
import Navigation from "./components/navigation/navigation";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/post/new" component={PostForm} />
          <Route path="/post/posts" component={PostsList} />
          <Route path="/post/:id" component={PostForm} />
          <Route path="/info/:id" component={Info} />
          <Route path="/project/new" component={ProjectForm} />
          <Route path="/project/:id" component={ProjectForm} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="App">
        <Navigation />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return {
    isAuthenticated: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthState: () => dispatch(actions.authState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
