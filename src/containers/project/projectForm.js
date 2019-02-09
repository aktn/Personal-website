import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";
import Button from "./../../components/UI/button/button";
import Input from "./../../components/UI/Input/Input";

class ProjectForm extends Component {
  state = {
    projectForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      description: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Description"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
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

    let errors = {};
    // if (this.state.title === "") errors.title = "Title is empty";
    // if (this.state.description === "")
    //   errorr.description = "Description is empty";
    // this.setState({ errors });

    //const isValid = Object.keys(errors).length === 0;

    const title = this.state.projectForm.title.value;
    const description = this.state.projectForm.description.value;
    this.props.saveProject({ title, description });
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
        <Button disabled={!this.state.formIsValid}>Save</Button>
      </form>
    );

    return (
      <div>
        <h3>Project Form</h3>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveProject: projectData => dispatch(actions.saveProject(projectData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
