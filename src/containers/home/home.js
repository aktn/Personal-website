import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
    this.props.onInitProject();
  }

  render() {
    const infoDescription = this.props.info.description;
    const infoTitle = this.props.info.title;
    let aboutMe;
    if (infoDescription) {
      aboutMe = infoDescription.replace(/-b/gi, "\n");
    }

    const projects = this.props.project;

    const projectsList = projects.map(project => (
      <div className="column" key={project.id}>
        <div className="column__title">{project.title}</div>
        <div className="column__description">{project.description}</div>
      </div>
    ));

    return (
      <div className="home-info">
        {/* <div className="home-info__social">
          <a href="https://github.com/aktn">
            LinkedIn
          </a>
          <a href="https://github.com/aktn">
            Github
          </a>
          <a href="#projects">Projects</a>
        </div> */}

        <div className="home-info__about">
          <div className="home-info__about__wrap">
            <h1>"{infoTitle}"</h1>
            <p>{aboutMe}</p>
          </div>
        </div>

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
