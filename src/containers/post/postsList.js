import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Post from "../../components/post/post";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const emptyMessage = <p>There are no posts yet.</p>;

    let postsList = [];
    if (this.props && this.props.posts.length > 0) {
      postsList = this.props.posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ));
    }
    return (
      <div>{this.props.posts.length === 0 ? emptyMessage : postsList}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
