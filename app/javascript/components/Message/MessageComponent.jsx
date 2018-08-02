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
      		newMessageVisible: false,
      		selected: this.props.selected,
      		editMessage: false
    	};     

		this.showMessageCreate = this.showMessageCreate.bind(this)
		this.showMessageEdit = this.showMessageEdit.bind(this)
		this.messageCreated = this.messageCreated.bind(this)
		this.selectionChanged = this.selectionChanged.bind(this)
	}

	showMessageCreate() {
		this.setState({ newMessageVisible:true, editMessage: false })
	}
	showMessageEdit() {
		this.setState({ newMessageVisible:true, editMessage: true })
		//console.log("Selected: " + this.state.selected + " : " + this.state.editMessage + " : " + this.state.newMessageVisible)
	}

	messageCreated(state) {
		this.setState({newMessageVisible: false})
	}

	selectionChanged(event, data) {
		this.setState({selected: data.value})
	}

	

  	render() {
		return(
		  <Provider store={store}>
		  	<div>
				<div className="ui both sides labeled input">
					<MessageSelector selected={this.state.selected} onChange={this.selectionChanged}/>
					<Button onClick={this.showMessageCreate} size="mini" type="button">
						<Icon name='plus' />
					</Button>
					<Button onClick={this.showMessageEdit} size="mini" type="button" disabled={this.state.selected===null}>
						<Icon name='edit' />
					</Button>
		  			<br/>
		  			<NewMessage edit={this.state.editMessage} messageId={this.state.selected} visible={this.state.newMessageVisible} onMessageCreated={this.messageCreated}/>
			  	</div>
		 	</div>
		  </Provider>
		)
  	}
}

export default MessageComponent;