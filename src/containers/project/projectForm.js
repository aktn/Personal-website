import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";
import Button from "./../../components/UI/button/button";
import Input from "./../../components/UI/Input/Input";

class ProjectForm extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchProject(this.props.match.params.id);
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      projectForm: {
        title: {
          value: nextProps.project.title
        },
        description: {
          value: nextProps.project.description
        }
      }
    });
  };

  state = {
    projectForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title"
        },
        value: this.props.project ? this.props.project.title : "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Description"
        },
        value: this.props.project ? this.props.project.description : "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      url: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "URL"
        },
        value: this.props.project ? this.props.project.url : "",
        touched: false,
        valid: false,
        validation: {
          required: false
        }
      }
    },
    formIsValid: false
  };

  checkValidity(value, rules) {
    if (!rules) return true;

    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  }

  handleSubmit = e => {
    e.preventDefault();

    const title = this.state.projectForm.title.value;
    const description = this.state.projectForm.description.value;
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      this.props.updateProject(id, { title, description });
    } else {
      this.props.saveProject({ title, description });
    }
  };

  handleInputChange = (event, inputIdentifier) => {
    const projectForm = { ...this.state.projectForm };
    const updatedFormElement = { ...projectForm[inputIdentifier] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      event.target.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    projectForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in projectForm) {
      formIsValid = projectForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ projectForm, formIsValid });
  };

  render() {
    const formElements = [];
    for (let inputElement in this.state.projectForm) {
      formElements.push({
        id: inputElement,
        config: this.state.projectForm[inputElement]
      });
    }

    let checkExisting = this.props.match.params.id;
    let buttonLabel = <Button disabled={!this.state.formIsValid}>Post</Button>;
    if (checkExisting) {
      buttonLabel = <Button disabled={!this.state.formIsValid}>Update</Button>;
    }

    let form = (
      <form onSubmit={this.handleSubmit}>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            elementType={formElement.config.elementType}
            touched={formElement.config.touched}
            invalid={!formElement.config.valid}
            changed={event => this.handleInputChange(event, formElement.id)}
            shouldValidate={formElement.config.validation}
          />
        ))}
        {buttonLabel}
      </form>
    );

    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Project Form</h3>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (props.match.params.id) {
    return {
      project: state.project.project
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveProject: projectData => dispatch(actions.saveProject(projectData)),
    onFetchProject: id => dispatch(actions.fetchProject(id)),
    updateProject: (id, data) => dispatch(actions.updateProject(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
