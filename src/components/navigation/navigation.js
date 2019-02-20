import Nav from "react-bootstrap/Nav";
import "./navigation.scss";
import React from "react";

const navigation = () => (
  <div className="nav">
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link class="navItem" href="/project/new">
          Project
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link class="navItem" href="/info//-LX1bWcQJbBAAAgieK3U">
          Info
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link class="navItem" href="/post/new">
          Post
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link class="navItem" href="">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default navigation;
