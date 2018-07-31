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
      		visible: false
    	};     

		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleTemplateCreated = this.handleTemplateCreated.bind(this)
    }

  	componentWillReceiveProps(nextProps) { // Load Contact Asynchronously
    	const { message } = nextProps;

	    if(message.id !== this.props.message.id) { // Initialize form only once
	      this.props.initialize(message)
	    }
	}

	handleButtonClick() {
		this.setState({ visible: !this.state.visible })
		return false
	}
  	handleSidebarHide = () => this.setState({ visible: false })

    handleTemplateCreated() {
    	this.setState({ visible: !this.state.visible })
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
						visible={this.state.visible}
						width='very wide'
						className="ui modal transition active"
					>
						<div>
							<Header>Create Template</Header>
			      			<NewTemplate onSubmit={this.handleTemplateCreated}/>
			      		</div>
					</Sidebar>
					<Sidebar.Pusher dimmed={this.state.visible}>
						<Grid columns={1}>
							<Grid.Column>
								<Form onSubmit={handleSubmit} loading={loading}>
									<Field name='name' 
										component={InputField}
        								label='Name'  
        								placeholder='name' />
					            	<Field
								        component={SelectField}
								        name='template_id'
								        label="Template"
								        options={this.props.templates.map(s => ({ ...s, key: s.id, text: s.name, value: s.id }))}
								        placeholder="Choose One"/>
					      			<Button type="button" onClick={this.handleButtonClick}>+</Button>
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