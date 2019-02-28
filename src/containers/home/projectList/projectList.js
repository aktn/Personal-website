import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./projectList.scss";
import Spinner from "../../../components/UI/spinner/spinner";

class projectList extends Component {
  componentDidMount() {
    this.props.onInitProject();
  }

  render() {
    let projectsList;
    let projects;

    if (this.props.project) {
      projects = this.props.project;
    }

    projectsList =
      Object.keys(projects).length > 0 ? (
        projects.map(project => (
          <div className="column" key={project.id}>
            <div className="column__title">
              <a href={project.url} target="_blank">
                {project.title}
              </a>
            </div>
            <div className="column__description">{project.description}</div>
          </div>
        ))
      ) : (
        <Spinner />
      );

    return (
      <div className="projectList">
        <div className="projectList__container">
          <div className="projectList__container__wrap">
            <h3>
              <a name="projectList__projects" />
              Main projects I have been building
            </h3>
            {projectsList}
            <h5>
              Other small work can be found on{" "}
              <a href="https://github.com/aktn" target="_blank">
                Github
              </a>
              .
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project.project,
    error: state.project.error
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
