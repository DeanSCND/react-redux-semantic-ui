import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import MessageForm from './MessageForm.jsx';
import { newMessage, saveMessage} from '../../actions/message-actions.jsx';
import { fetchTemplates } from '../../actions/template-actions.jsx';

class NewMessage extends React.Component {
	//handleOpen = () => this.setState({ modalOpen: true })
  	//handleClose = () => this.setState({ modalOpen: false })

  	constructor(props) {
		super(props)
		this.state = { modalOpen: this.props.visible }
		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		this.props.newMessage();
		this.props.fetchTemplates();
	}

	componentWillReceiveProps(nextProps) {
	  // You don't have to do this check first, but it can help prevent an unneeded render
	  if (nextProps.visible !== this.state.modalOpen) {
	    this.setState({ modalOpen: nextProps.visible });
	  }
	}

	handleClose() {
		this.setState({modalOpen: false})
		this.props.onMessageCreated(this.state.modalOpen);
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