import React from 'react';
import { fetchMessages} from '../../actions/message-actions.jsx';
import store from "../../store/index";
import { Provider } from 'react-redux';
import MessageSelector from './MessageSelector.jsx';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import MessageForm from './MessageForm.jsx';

class MessageComponent extends React.Component {
	state = { modalOpen: false }

	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })

  	constructor(props) {
		super(props);
	}

	submit = (importInstance) => {
    	return 
	}

  	render() {
		return(
		  <Provider store={store}>
			  <div>
			  	<MessageSelector/>
			  	<Modal 
	        		trigger={<Button size='mini' type='button' onClick={this.handleOpen}>Create Message</Button>}
	        		open={this.state.modalOpen}
        			onClose={this.handleClose}>
			    	<Modal.Header>Create New Message</Modal.Header>
			    	<Modal.Content image>
				      	<Modal.Description>
				      		<MessageForm message={this.props.import} loading={this.props.loading} onSubmit={this.submit} />
			      		</Modal.Description>
			    	</Modal.Content>
			  	</Modal>		
		  	</div>
		  </Provider>
		)
  }
}

export default MessageComponent;