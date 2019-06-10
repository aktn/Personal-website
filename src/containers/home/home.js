import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./home.scss";
import Spinner from "../../components/UI/spinner/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
    this.props.onInitProject();
  }

  render() {
    let aboutMe = (
      <div className="home-info__wrap">
        <Spinner />
      </div>
    );

    const infoDescription = this.props.info.description;
    const infoTitle = this.props.info.title;

    if (infoDescription && infoTitle) {
      aboutMe = (
        <div>
          <div className="title">
            <h1>{infoTitle}</h1>
          </div>
          <div className="home-info__wrap">
            <p>{infoDescription.replace(/-b/gi, "\n")}</p>
            <div className="social">
              <p style={{ display: "inline-block" }}>Find me on:</p>
              <a href="https://github.com/aktn" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/aung-khant-thet-naing-82303077/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      );
    }

    return <div className="home-info">{aboutMe}</div>;
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
    onInitInfo: () => dispatch(actions.fetchInfo()),
    onInitProject: () => dispatch(actions.fetchProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
