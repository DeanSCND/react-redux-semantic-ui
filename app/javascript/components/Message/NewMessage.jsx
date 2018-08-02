import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Button, Modal, Icon } from 'semantic-ui-react';
import MessageForm from './MessageForm.jsx';
import { newMessage, saveMessage, fetchMessage, updateMessage} from '../../actions/message-actions.jsx';
import { fetchTemplates } from '../../actions/template-actions.jsx';

class NewMessage extends React.Component {
  	constructor(props) {
		super(props)
		this.state = { modalOpen: this.props.visible, edit: this.props.edit, messageId: this.props.messageId }
		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		this.props.fetchTemplates();
		//this.props.fetchMessage(this.props.messageId);
	}

	componentWillReceiveProps(nextProps) {
		// You don't have to do this check first, but it can help prevent an unneeded render
		if (nextProps.visible !== this.state.modalOpen) {
			this.setState({ 
				modalOpen: nextProps.visible, 
				edit: nextProps.edit, 
				messageId: nextProps.messageId 
			});

			if (!nextProps.edit) {
				this.props.newMessage();
			} else {
				this.props.fetchMessage(nextProps.messageId);
			}
		}
	}
	
	handleClose() {
		this.setState({modalOpen: false})
		this.props.onMessageCreated(this.state.modalOpen);
	}

	submit = (message) => {
    	if (!message._id) {
	    	return this.props.saveMessage(message)
	      		.then(response => {
	      			this.setState({ redirect:true }); 
	      			this.handleClose()
	      		})
	      		.catch(err => {
	         	throw new SubmissionError(this.props.errors)
	       	})
	    } else {
	     	return this.props.updateMessage(message)
				.then(response => this.setState({ redirect:true }))
				.catch(err => {
				 throw new SubmissionError(this.props.errors)
			})
     	}
	}

	render() {
		//console.log("Message: " + JSON.stringify(this.props))

		return (
			<div>
			  	<Modal 
	        		open={this.state.modalOpen}
        			onClose={this.handleClose}
        			scrolling="false">
			    	<Modal.Header>{this.state.edit ? 'Edit Message' : 'Add New Message'}</Modal.Header>
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
      message : state.messageStore.message,
      errors: state.messageStore.errors,
      templates: state.templateStore.templates
  }
}

export default connect(mapStateToProps, {newMessage, saveMessage, fetchTemplates, fetchMessage, updateMessage})(NewMessage);