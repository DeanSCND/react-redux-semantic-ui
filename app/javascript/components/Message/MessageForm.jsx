import React, { Component } from 'react';
import { Form, Grid, Button, Dropdown } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class MessageForm extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
      		templates: (this.props.templates)
    	};     

		this.templateSelected = this.templateSelected.bind(this)
    }

    templateSelected() {
    	console.log("HERE")
		this.props.dispatch(change('MessageForm', 'template_id', '1'));
    }

	renderField = ({ input, label, type, meta: { touched, error } }) => (
	    <Form.Field className={classnames({error:touched && error})}>
			<label>{label}</label>
      		<input {...input} placeholder={label} type={type}/>
	      	{touched && error && <span className="error">{error.message}</span>}
	    </Form.Field>
  	)

	renderSelect = props => (
	    <Form.Field className={classnames({error:props.touched && props.error})}>
			<label>{props.label}</label>
      		<Dropdown selection {...props.input}
				value={props.input.value}
				placeholder="Select Template ..."
				options={props.options}
    		/> 
    		{props.touched && props.error && <span className="error">{props.error.message}</span>}		
	      	
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
	            <Field name="name" 
	            	type="text" 
	            	component={this.renderField} 
	            	label="Name"/>
	            <Field name="template_id" 
	            	component={this.renderSelect} 
	            	label="Template"
	            	options={this.state.templates.map(s => ({ ...s, key: s.id, text: s.name, value: s.id }))}/>
				<br/>
	            <Button primary type='submit' disabled={submitting}>Create</Button>
	          </Form>
	        </Grid.Column>
	      </Grid>
	    )
	}
}

export default reduxForm({form: 'message'})(MessageForm);