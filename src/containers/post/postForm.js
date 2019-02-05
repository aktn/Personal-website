import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Input from "../../components/UI/Input/Input";
import { savePost } from "../../store/actions/post";
import * as actions from "../../store/actions/index";

class PostForm extends React.Component {
  state = {
    id: this.props.post ? this.props.post.id : "",
    title: this.props.post ? this.props.post.title : "",
    body: this.props.post ? this.props.post.body : "",
    errors: [""],
    loading: false,
    done: false
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      id: nextProps.post.id,
      title: nextProps.post.title,
      body: nextProps.post.body
    });
  };

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.onFetchPost(this.props.match.params.id);
    }
  };

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    let errors = {};
    if (this.state.title === "") errors.title = "Title is empty";
    if (this.state.body === "") errors.body = "Body is empty";
    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      const { title, body } = this.state;

      this.setState({ loading: true });

      this.props.savePost({ title, body });
    }
  };

  render() {
    const form = (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new post</h2>

        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>

        <div>
          <label htmlFor="body">Post</label>
          <input
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            id="body"
          />
          <span>{this.state.errors.body}</span>
        </div>

        <div className="field">
          <button>Post</button>
        </div>
      </form>
    );
    return <div>{this.state.done ? <Redirect to="/posts" /> : form}</div>;
  }
}

function mapStateToProps(state, props) {
  if (props.match.params.id) {
    return {
      post: state.post.post
    };
  }

  return { post: null };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPost: id => dispatch(actions.fetchPost(id)),
    savePost: (title, body) => dispatch(actions.savePost(title, body))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
