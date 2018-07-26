import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class MessageForm extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
      		templates: (this.props.templates)
    	};     

    }


	renderField = ({ input, label, type, meta: { touched, error } }) => (
	    <Form.Field className={classnames({error:touched && error})}>
			<label>{label}</label>
      		<input {...input} placeholder={label} type={type}/>
	      	{touched && error && <span className="error">{error.message}</span>}
	    </Form.Field>
  	)

	renderSelect = ({ input, label, type, items, meta: { touched, error } }) => (
	    <Form.Field className={classnames({error:touched && error})}>
			<label>{label}</label>
      		<select {...input} type={type} className="ui fluid dropdown">
				<option key="0">Please Select</option>
				{items}
        	</select>
	      	{touched && error && <span className="error">{error.message}</span>}
	    </Form.Field>
  	)

	render() {
    	const { handleSubmit, pristine, submitting, loading } = this.props;

		var items = this.props.templates.map((template) => {
	        return (
	        	<option key={template.id} value={template.id}>{template.name}</option>
	        )
		})

	    return (
	      <Grid columns={1}>
	        <Grid.Column>
	          <Form onSubmit={handleSubmit} loading={loading}>
	            <Field name="name" type="text" component={this.renderField} label="Name"/>
	            <Field name="template_id" type="integer" component={this.renderSelect} items={items} label="Template"/>
				<br/>
	            <Button primary type='submit' disabled={submitting}>Create</Button>
	          </Form>
	        </Grid.Column>
	      </Grid>
	    )
	}
}

export default reduxForm({form: 'message'})(MessageForm);