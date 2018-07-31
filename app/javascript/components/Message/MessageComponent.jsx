import React from 'react';
import store from "../../store/index";
import { Provider } from 'react-redux';
import MessageSelector from './MessageSelector.jsx';
import { Button, Icon} from 'semantic-ui-react';
import NewMessage from './NewMessage.jsx';

class MessageComponent extends React.Component {

  	constructor(props) {
		super(props);
		
		this.state = {
      		newMessageVisible: false
    	};     

		this.showMessageCreate = this.showMessageCreate.bind(this)
		this.messageCreated = this.messageCreated.bind(this)
	}

	showMessageCreate() {
		this.setState({ newMessageVisible:true })
	}

	messageCreated(state) {
		this.setState({newMessageVisible: false})
	}

  	render() {
		return(
		  <Provider store={store}>
		  	<div>
				<div className="ui both sides labeled input">
					<MessageSelector selected={this.props.selected}/>
					<Button onClick={this.showMessageCreate} size="mini" type="button">
						<Icon name='plus' />
					</Button>
		  			<br/>
		  			<NewMessage visible={this.state.newMessageVisible} onMessageCreated={this.messageCreated}/>
			  	</div>
		 	</div>
		  </Provider>
		)
  }
}

export default MessageComponent;