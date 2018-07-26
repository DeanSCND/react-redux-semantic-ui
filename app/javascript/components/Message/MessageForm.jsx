import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class MessageForm extends Component {
	constructor(props) {
    	super(props);

    	console.log("TEMPLATES: " + JSON.stringify(this.props.templates))

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

	render() {


    	const { handleSubmit, pristine, submitting, loading } = this.props;
	    if (this.props.templates != undefined) {
		    var items= this.props.templates.map((template) => {
		    		console.log(JSON.stringify(template))
		          return (
		            <option key={template.id} value={template.id}>{template.name}</option>
		        )
		    });
		}


	    return (
	      <Grid columns={1}>
	        <Grid.Column>
	          <Form onSubmit={handleSubmit} loading={loading}>
	            <Field name="name" type="text" component={this.renderField} label="Name"/>
	            <Form.Field>
		            <select defaultValue="coconut" className="ui fluid dropdown">
        				<option key="0">Please Select</option>
            			{items} 
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

export default reduxForm({form: 'import'})(MessageForm);