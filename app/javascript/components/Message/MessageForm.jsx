import React, { Component } from 'react';
import { Form, Grid, Button, Select } from 'semantic-ui-react';
import { Field, reduxForm, select } from 'redux-form';
import classnames from 'classnames';


class MessageForm extends Component {

	renderField = ({ input, label, type, meta: { touched, error } }) => (
	    <Form.Field className={classnames({error:touched && error})}>
			<label>{label}</label>
      		<input {...input} placeholder={label} type={type}/>
	      	{touched && error && <span className="error">{error.message}</span>}
	    </Form.Field>
  	)


	render() {
    	const { handleSubmit, pristine, submitting, loading } = this.props;

	    return (
	      <Grid columns={1}>
	        <Grid.Column>
	          <Form onSubmit={handleSubmit} loading={loading}>
	            <Field name="name" type="text" component={this.renderField} label="Name"/>
	            <Form.Field>
		            <select defaultValue="coconut" className="ui fluid dropdown">
					  <option value="grapefruit">Grapefruit</option>
					  <option value="lime">Lime</option>
					  <option value="coconut">Coconut</option>
					  <option value="mango">Mango</option>
					</select>
				</Form.Field>
				<br/>
	            <Button primary type='submit' disabled={submitting}>Create</Button>
	          </Form>
	        </Grid.Column>
	      </Grid>
	    )
	}
}

export default reduxForm({form: 'message'})(MessageForm);