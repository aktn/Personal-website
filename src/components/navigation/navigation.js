import Nav from "react-bootstrap/Nav";
import "./navigation.scss";
import React from "react";
import { connect } from "react-redux";
import { loggingOut } from "./../../store/actions/index";
import * as actions from "./../../store/actions/index";

const navigation = ({ dispatch }) => (
  <div className="nav">
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link class="navItem" href="/project/new">
          Project
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="navItem" href="/info//-LX1bWcQJbBAAAgieK3U">
          Info
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="navItem" href="/post/new">
          Post
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          className="navItem"
          onClick={() => dispatch(loggingOut())}
          href="/logout"
        >
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogout: () => dispatch(actions.logout())
//   };
// };

export default connect()(navigation);
