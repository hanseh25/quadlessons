// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import './form-style.css';

type State = {
  isValidated: boolean,
};

type Props = any;

export default class Form extends PureComponent<Props, State> {
  state = {
    isValidated: false,
  };

  formEl: Node = '';

  /**
   * Performs the form validation. It looks for a class invalid-feedback on
   * the form element(parent Node) for it to display the error text.
   * @returns {boolean}
   */
  validate = () => {
    const formEl: any = this.formEl;
    const formLength = formEl.length;

    // Show & Hide form validation based on validity checker
    if (formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = '';
          }
        }
      }
      return false;
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      }
      return true;
    }
  };

  /**
   * This function is just a wrapper that triggers the validation
   * function and triggers the actual form submit callback handler.
   * @param event
   */
  submitHandler = (event: any) => {
    if (!this.validate()) {
      event.preventDefault();
      this.setState({ isValidated: true });
    } else {
      this.props.onSubmit(event);
    }
  };

  render() {
    const props = this.props;
    let classNames = [];
    if (props.className) {
      classNames = [...props.className];
      delete props.className;
    }

    if (this.state.isValidated) {
      classNames.push('was-validated');
    }

    return (
      <form
        {...props}
        className={classNames}
        noValidate
        ref={(form: Node): Node => (this.formEl = form)}
        onSubmit={this.submitHandler.bind(this)}
      >
        {this.props.children}
      </form>
    );
  }
}
