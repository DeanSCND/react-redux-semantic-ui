import React, { Component } from 'react';
import { Form, Grid, Button, Icon, Dropdown, Select as SelectComponent, Container, Sidebar, Header } from 'semantic-ui-react';
import {InputField, SelectField} from '../FormComponents'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import NewTemplate from '../Template/NewTemplate.jsx';

class MessageForm extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
      		templates: (this.props.templates),
      		sidebarVisible: false
    	};     

		this.handleAddTemplate = this.handleAddTemplate.bind(this)
		this.handleTemplateCreated = this.handleTemplateCreated.bind(this)
    }

  	componentWillReceiveProps(nextProps) { // Load Contact Asynchronously
    	const { message } = nextProps;

	    if(message.id !== this.props.message.id) { // Initialize form only once
	      this.props.initialize(message)
	    }
	}

	handleAddTemplate() {
		this.setState({ sidebarVisible: !this.state.visible })
		return false
	}
  	
	// **************************************
  	// anonymous fuction assigned to variable
  	// fat arrow from ES6 - take from coffee
  	// **************************************
  	handleSidebarHide = () => this.setState({ sidebarVisible: false })

    handleTemplateCreated() {
    	this.setState({ sidebarVisible: !this.state.sidebarVisible })
    }

	render() {
    	const { handleSubmit, pristine, submitting, loading } = this.props;
    	const divStyle = {height: '400px'}
		
		var items = this.props.templates.map((template) => {
	        return (
	        	<option key={template.id} value={template.id}>{template.name}</option>
	        )
		})

	    return (
	    	<div style={divStyle}>
				<Sidebar.Pushable>
					<Sidebar
						as={Container}
						animation='overlay'
						onHide={this.handleSidebarHide}
						visible={this.state.sidebarVisible}
						width='very wide'
						className="ui modal transition active"
					>
						<div>
							<Header>Create Template</Header>
			      			<NewTemplate onSubmit={this.handleTemplateCreated}/>
			      		</div>
					</Sidebar>
					<Sidebar.Pusher dimmed={this.state.sidebarVisible}>
						<Grid columns={1}>
							<Grid.Column>
								<Form onSubmit={handleSubmit} loading={loading}>
									<Field name='name' 
										component={InputField}
        								label='Name'  
        								placeholder='name' 
        								disabled={submitting}/>
					            	<Field
								        component={SelectField}
								        name='template_id'
								        label="Template"
								        options={this.props.templates.map(s => ({ ...s, key: s.id, text: s.name, value: s.id }))}
								        placeholder="Choose One"
								        disabled={submitting}/>
					      			<Button type="button" onClick={this.handleAddTemplate} disabled={submitting}>+</Button>
									<Button primary type='submit' disabled={submitting}>Create</Button>
	      						</Form>
					        </Grid.Column>
					      </Grid>
		      		</Sidebar.Pusher>
	      		</Sidebar.Pushable>
			</div>
	    )
	}
}

export default reduxForm({form: 'message'})(MessageForm);