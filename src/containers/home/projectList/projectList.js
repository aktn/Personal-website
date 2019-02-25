import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./projectList.scss";

class projectList extends Component {
  componentDidMount() {
    this.props.onInitProject();
  }

  render() {
    const projects = this.props.project;

    const projectsList = projects.map(project => (
      <div className="column" key={project.id}>
        <div className="column__title">{project.title}</div>
        <div className="column__description">{project.description}</div>
      </div>
    ));

    return (
      <div className="home-project">
        <div className="home-project__container">
          <h3>
            <a name="projects" />
            Main projects I have been building
          </h3>
          {projectsList}
          <h5>
            Other work can be found on{" "}
            <a href="https://github.com/aktn">Github</a>.
          </h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitProject: () => dispatch(actions.fetchProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(projectList);
