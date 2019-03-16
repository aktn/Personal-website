import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Post from "../../components/post/post";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  updatePost(id) {
    console.log(id + "update");
  }

  deletePost(id) {
    console.log(id + "delete");
  }

  render() {
    const emptyMessage = <p>There are no posts yet.</p>;

    let postsList = [];
    if (this.props.posts) {
      postsList = this.props.posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          onUpdate={this.updatePost}
          onDelete={this.deletePost}
        />
      ));
    }

    const postForm__container = {
      margin: "30px 60px"
    };

    return (
      <div style={postForm__container}>
        {this.props.posts === 0 ? emptyMessage : postsList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.post.posts);
  return {
    posts: state.post.posts
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
