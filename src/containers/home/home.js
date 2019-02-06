import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
  }

  render() {
    const scrollPointer = {
      "font-size": "22px",
      "padding-right": "10px"
    };

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
            <h3>Stuff I have been building</h3>
            <div className="column">
              <div className="column__title">Project</div>
              <div className="column__description">
                Babel is a compiler for writing next generation JavaScript Babel
                is a compiler for writing next generation JavaScript
              </div>
            </div>
            <div className="column">
              <div className="column__title">Project</div>
              <div className="column__description">
                Babel is a compiler for writing next generation JavaScript
              </div>
            </div>
          </div>
        </div>

        <div className="home-footer">
          <div class="home-footer__text">
            <p>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.info.info,
    // project: state.project.project,
    post: state.post.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitInfo: () => dispatch(actions.fetchInfo("-LX1bWcQJbBAAAgieK3U"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
