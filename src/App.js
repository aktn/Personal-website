import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";

import "./App.scss";

import Info from "./containers/info/info";
import PostForm from "./containers/post/postForm";
import PostsList from "./containers/post/postsList";
import Home from "./containers/home/home";
import ProjectForm from "./containers/project/projectForm";
import Login from "./containers/login/login";
import * as actions from "./store/actions/index";
import Navigation from "./components/navigation/navigation";
import ProjectList from "./containers/home/projectList/projectList";
import Sidebar from "./components/sidebar/sidebar";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  render() {
    let routes = (
      <Router>
        <div class="wrapper">
          <Sidebar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <div>
          <Navigation />
          <Switch>
            <Route path="/post/new" component={PostForm} />
            <Route path="/post/posts" component={PostsList} />
            <Route path="/post/:id" component={PostForm} />
            <Route path="/info/:id" component={Info} />
            <Route path="/project/new" component={ProjectForm} />
            <Route path="/project/:id" component={ProjectForm} />
            <Redirect to="/" />
          </Switch>
        </div>
      );
    }
    return <div className="App">{routes}</div>;
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
