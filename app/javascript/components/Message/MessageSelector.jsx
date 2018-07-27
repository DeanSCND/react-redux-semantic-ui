import React from 'react';
import { Button, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/message-actions.jsx';


class MessageSelector extends React.Component {
  options = [
    { id: 'all', text: 'All', value: 'all' },
    { id: 'articles', text: 'Articles', value: 'articles' },
    { id: 'products', text: 'Products', value: 'products' },
  ]

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selected  
    };     
  }

  componentDidMount() {
    this.props.fetchMessages();
  }
  
  handleChange(event, data) {
      var value = data.value;
      this.setState({value: value});
  }

  render() {
    return(
      <div>
        <Select onChange={this.handleChange.bind(this)} compact options={this.props.messages.map(s => ({ ...s, key: s.id, text: s.name, value: s.id }))} defaultValue={this.state.value} placeholder="Select Message ..." />
        <input onChange={() => {}} name="outreach[message_id]" id="outreach_message_id" style={{display: 'none'}} value={(this.state.value == undefined) ? 0 : this.state.value  }/>
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
