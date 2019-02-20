import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./../../components/UI/Input/Input";
import Button from "./../../components/UI/button/button";
import * as actions from "../../store/actions/index";
import { auth } from "../../firebase";

class Login extends Component {
  state = {
    auth: {
      email: {
        elementType: "input",
        elementConfig: {
          placeholder: "Email",
          type: "email"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          isEmail: true
        }
      },
      password: {
        elementType: "input",
        elementConfig: {
          placeholder: "Password",
          type: "password"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 5
        }
      }
    },
    formIsValid: false
  };

  checkValidity(values, rules) {
    let isValid = true;

    if (!rules) return true;

    if (rules.required) {
      isValid = values.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = values.length >= 4 && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(values) && isValid;
    }

    return isValid;
  }

  handleInputChange = (event, control) => {
    const updateInputs = {
      ...this.state.auth,
      [control]: {
        ...this.state.auth[control],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.auth[control].validation
        ),
        touched: true
      }
    };

    const checkForm = { ...this.state.auth };
    let formIsValid = true;
    for (let inputIdentifier in checkForm) {
      formIsValid = checkForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ auth: updateInputs, formIsValid: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.auth.email.value;
    const password = this.state.auth.password.value;
    this.props.authUser({ email, password });
    // console.log(this.state.auth.email.value, this.state.auth.password.value);
  };

  render() {
    const formElements = [];
    for (let element in this.state.auth) {
      formElements.push({
        id: element,
        config: this.state.auth[element]
      });
    }

    let form = formElements.map(formElement => (
      <Input
        key={formElement.id}
        value={formElement.config.value}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        touched={formElement.config.touched}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        changed={event => this.handleInputChange(event, formElement.id)}
      />
    ));

    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Login</h3>
        <form onSubmit={this.handleSubmit}>
          {form}
          <Button disabled={!this.state.formIsValid}>Login</Button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  console.log(state.user);
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    authUser: user => dispatch(actions.authCheck(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
