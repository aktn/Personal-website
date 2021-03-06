import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/button/button";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Info extends Component {
  componentWillReceiveProps = nextProps => {
    this.setState({
      infoForm: {
        title: {
          value: nextProps.info.title
        },
        description: {
          value: nextProps.info.description
        }
      }
    });
    // console.log(nextProps.info.title);
  };

  componentDidMount() {
    this.props.onInitInfo(this.props.match.params.id);
  }

  state = {
    infoForm: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Title"
        },
        value: this.props.info ? this.props.info.title : "",
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
        value: "",
        touched: false,
        valid: false,
        validation: {
          required: true
        }
      }
    },
    formIsValid: false
  };

  checkValidity(value, rules) {
    let valid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      valid = value.trim() !== "";
    }

    return valid;
  }

  changeHandler = (event, inputIdentifier) => {
    const updatedForm = { ...this.state.infoForm };
    const element = { ...updatedForm[inputIdentifier] };

    element.value = event.target.value;
    element.touched = true;
    element.valid = this.checkValidity(element.value, element.validation);
    updatedForm[inputIdentifier] = element;

    let formIsValid = true;

    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ infoForm: updatedForm, formIsValid: formIsValid });
  };

  submitForm = event => {
    event.preventDefault();

    const formData = {};
    for (let data in this.state.infoForm) {
      formData[data] = this.state.infoForm[data].value;
    }

    this.props.onSubmitForm(formData);
  };

  render() {
    const formElements = [];

    for (let info in this.state.infoForm) {
      formElements.push({
        id: info,
        config: this.state.infoForm[info]
      });
    }

    let form = (
      <form onSubmit={this.submitForm}>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            changed={event => this.changeHandler(event, formElement.id)}
            shouldValidate={formElement.config.validation}
          />
        ))}
        <Button disabled={!this.state.formIsValid}>Update</Button>
      </form>
    );

    return (
      <div>
        <h3>Enter the information for home page</h3>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (props.match.params.id) {
    return {
      info: state.info.info,
      loading: state.info.loading
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: data => dispatch(actions.SubmitInfo(data)),
    onInitInfo: id => dispatch(actions.fetchInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
