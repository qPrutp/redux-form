import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm.js';
import { SubmissionError } from 'redux-form';

class RegisterFormContainer extends Component {
  submit = values => {
    if (['kent', 'andy', 'john', 'joel'].includes(values.username)) {
      throw new SubmissionError({
        username: 'Username alredy taken'
      });
    } else {
      window.alert(JSON.stringify(values, null, 4));
    }
  };

  getinitialValues() {
  {/*функція ініціалізації даних в формі по замовчуванню для того ще в
  філдс/індух видаляємо <option /> строку в customSelect*/}
    return {
      preference: 'spaces',
      newsletter: true
    }
  };
  render() {
    return <RegisterForm onSubmit={this.submit}
      initialValues={this.getinitialValues()} />;
  }
}

export default RegisterFormContainer;
