import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message-actions.jsx';


class MessageSelector extends React.Component {
  constructor(props) {
	super(props);
  }


  componentDidMount() {
    this.props.fetchMessages();
  }

   render() {
    if (this.props.messages != undefined) {
	    var items= this.props.messages.map((message) => {
	          return (
	            <option key={message.id} value={message.id}>{message.name}</option>
	        )
	    });
	}

    return(
      <div>
      	<select  skip_default_ids="false" allow_method_names_outside_object="true" >
        	<option key="0">Please Select</option>
            {items} 
  		</select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      messages : state.messageStore.messages
  }
}

export default connect(mapStateToProps, {fetchMessages})(MessageSelector);
