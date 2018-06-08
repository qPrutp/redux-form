import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { customInput, customSelect, discounts } from './fields';
// import { validate } from '../validation';
import capitalize from 'capitalize';
import {
	required,
	minLength,
	maxLength,
	banSymbol,
	machesPassword,
	asyncValidate
 } from '../validation';
 import './RegisterForm.css';

class RegisterForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<Field	name="firstname"
						component={customInput}
						type="text"
						label="Name"
						validate={[required]}
						normalize={capitalize}
				/>
				<Field	name="surname"
						component={customInput}
						type="text"
						label="Surname"
						validate={[required]}
						normalize={capitalize}
				/>
				<Field	name="username"
						component={customInput}
						type="text"
						label="Username"
						validate={[required, minLength,	maxLength, banSymbol]}
				/>
				<Field	name="password"
						component={customInput}
						type="password"
						label="Password"
						validate={[required]}
				/>
				<Field	name="confirmPassword"
						component={customInput}
						type="password"
						label="Confirm Password"
						validate={[required, machesPassword]}
				/>
				<Field	name="preference"
						component={customSelect}
						label="Preferred Formatting"
				/>
				<Field	name="newsletter"
						component={customInput}
						type="checkbox"
						label="Sign up to Newsletter?"
				/>
				<FieldArray	name="discountCodes" 
							component={discounts}
				/>
				<button type="submit">
					Submit
				</button>
			</form>
		);
	}
}

RegisterForm = reduxForm({
	form: 'register',
	// validate,
	asyncValidate,
	asyncBlurFilds: ['username']
})(RegisterForm);

export default RegisterForm;
