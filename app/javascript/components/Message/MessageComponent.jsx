import React from 'react';
import store from "../../store/index";
import { Provider } from 'react-redux';
import MessageSelector from './MessageSelector.jsx';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import NewMessage from './NewMessage.jsx';

class MessageComponent extends React.Component {
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
			  	<MessageSelector selected={this.props.selected}/>
			  	<NewMessage/>
		  	</div>
		  </Provider>
		)
  }
}

export default MessageComponent;