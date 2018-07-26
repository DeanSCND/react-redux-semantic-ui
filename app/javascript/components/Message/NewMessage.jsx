import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import MessageForm from './MessageForm.jsx';
import { newMessage, saveMessage} from '../../actions/message-actions.jsx';
import { fetchTemplates } from '../../actions/template-actions.jsx';

class NewMessage extends React.Component {
	state = { modalOpen: false }

	handleOpen = () => this.setState({ modalOpen: true })
  	handleClose = () => this.setState({ modalOpen: false })

  	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.newMessage();
		this.props.fetchTemplates();
	}

	submit = (message) => {
    	return this.props.saveMessage(message)
      		.then(response => {
      			this.setState({ redirect:true }); 
      			this.handleClose()
      		})
      		.catch(err => {
         	throw new SubmissionError(this.props.errors)
       	})

	}

	render() {
		return (
			<div>
			  	<Modal 
	        		trigger={<Button size='mini' type='button' onClick={this.handleOpen}>Create Message</Button>}
	        		open={this.state.modalOpen}
        			onClose={this.handleClose}>
			    	<Modal.Header>Create New Message</Modal.Header>
			    	<Modal.Content image>
				      	<Modal.Description>
				      		<MessageForm message={this.props.message} templates={this.props.templates} loading={this.props.loading} onSubmit={this.submit}/>
			      		</Modal.Description>
			    	</Modal.Content>
			  	</Modal>		
		  	</div>
		)
	}
}

function mapStateToProps(state) {
  return {
      messages : state.messageStore.messages,
      errors: state.messageStore.errors,
      templates: state.templateStore.templates
  }
}

export default connect(mapStateToProps, {newMessage, saveMessage, fetchTemplates})(NewMessage);