import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./home.scss";
import Project from "./../../components/project/project";

class Home extends Component {
  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
    this.props.onInitProject();
  }

  render() {
    const scrollPointer = {
      fontSize: "22px",
      paddingRight: "10px"
    };

    const projects = this.props.project;

    const projectsList = projects.map(project => (
      <div className="column" key={project.id}>
        <div className="column__title">{project.title}</div>
        <div className="column__description">{project.description}</div>
      </div>
    ));

    return (
      <div className="home-info">
        <div className="home-info__social">
          <a href="https://github.com/aktn">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://github.com/aktn">
            <i className="fa fa-github" />
          </a>
        </div>
        <div className="home-info__title">{this.props.info.title}</div>
        <div className="home-info__description">
          {this.props.info.description}
        </div>
        <div className="home-info__scroll">
          <i className="fa fa-angle-double-down" style={scrollPointer} />
          More from me
        </div>

        <div className="home-project">
          <div className="home-project__container">
            <h3>Main projects I have been building</h3>
            {projectsList}
            <h5>
              Other work can be found on{" "}
              <a href="https://github.com/aktn">Github</a>.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.info.info,
    project: state.project.project,
    post: state.post.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitInfo: () => dispatch(actions.fetchInfo("-LX1bWcQJbBAAAgieK3U")),
    onInitProject: () => dispatch(actions.fetchProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
