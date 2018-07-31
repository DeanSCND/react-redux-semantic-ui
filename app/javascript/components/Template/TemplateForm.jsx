import React, { Component } from 'react';
import { Form, Grid, Button} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {InputField, SelectField, TextAreaField} from '../FormComponents'
import classnames from 'classnames';


class TemplateForm extends Component {
	constructor(props) {
    	super(props);

		this.state = {
      		radioValue: 'email'
    	};   
	}

	render() {
		const { handleSubmit, pristine, submitting, loading } = this.props;

		return (
			<div>
				<Grid columns={1}>
					<Grid.Column>
						<Form onSubmit={handleSubmit} loading={loading}>
				            <Field name="name" 
				            	type="text" 
				            	component={InputField} 
				            	label="Name"/>
							<Form.Field>
						        <div className='ui radio'>
						          <label>
						            <Field
						              name="channel"
						              component="input"
						              type="radio"
						              value="email"
						            />{' '}
						            Email
						          </label>
						          &nbsp;&nbsp;
						          <label>
						            <Field
						              name="channel"
						              component="input"
						              type="radio"
						              value="sms"
						            />{' '}
						            SMS
						          </label>
						        </div>
							</Form.Field>				            	
				            <Field name="text" 
				            	type="text" 
				            	component={TextAreaField} 
				            	label="Text"/>
							<Button primary type='submit' disabled={submitting}>Create</Button>
							</Form>
			        </Grid.Column>
			    </Grid>
			</div>
		)
	}
}

export default reduxForm({form: 'template'})(TemplateForm);