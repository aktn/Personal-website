import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./projectList.scss";
import Spinner from "../../../components/UI/spinner/spinner";

class projectList extends Component {
  componentDidMount() {
    this.props.onInitProject();
  }

  static contextTypes = {
    router: () => true
  };

  render() {
    let projects;

    if (this.props.project) {
      projects = this.props.project;
    }

    let projectsList =
      Object.keys(projects).length > 0 ? (
        projects.map(project => (
          <div className="column" key={project.id}>
            <div className="column__title">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </div>
            <div className="column__description">{project.description}</div>
            <div className="column__env">Main environment: {project.env}</div>
          </div>
        ))
      ) : (
        <Spinner />
      );

    let gitLink;
    if (projectsList.length > 0) {
      gitLink = (
        <h5>
          Other small work can be found on{" "}
          <a
            href="https://github.com/aktn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </h5>
      );
    }

    return (
      <div className="projectList">
        <span className="backBtn" onClick={this.context.router.history.goBack}>
          &#8592;
        </span>
        <div className="projectList__container">
          <div className="projectList__container__wrap">
            <h3>Main projects I have been building</h3>
            {projectsList}
            {gitLink}
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
