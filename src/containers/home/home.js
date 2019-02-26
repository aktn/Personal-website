import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./home.scss";
import Spinner from "../../components/UI/spinner/spinner";

class Home extends Component {
  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
    this.props.onInitProject();
  }

  render() {
    let aboutMe = (
      <div className="home-info__about__wrap">
        <Spinner />
      </div>
    );

    const infoDescription = this.props.info.description;
    const infoTitle = this.props.info.title;

    if (infoDescription && infoTitle) {
      aboutMe = (
        <div className="home-info__about__wrap">
          <h1>"{infoTitle}"</h1>
          <p>{infoDescription.replace(/-b/gi, "\n")}</p>
        </div>
      );
    }

    return (
      <div className="home-info">
        <div className="home-info__about">{aboutMe}</div>
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
