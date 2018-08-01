import React from "react";
import PropTypes from "prop-types";
import superagent from 'superagent';
import { Dropdown } from 'semantic-ui-react';

class NewMessage_old extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', templates: [], template_id: 0};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTemplateChange = this.handleTemplateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}

	componentDidMount() {
		const url='/api/templates';
		superagent.get(url).query({ format: 'json' }).end ((error, response)=>{
            this.setState({
              templates: response.body.map(({ id, name }) => ({ value: id, text: name }))
            })
		})
	}

	handleTemplateChange(event, value ) {
    	this.setState({template_id: value.value});
    	console.log("Changed: " + value.value	)
  	}

	handleNameChange(event) {
    	this.setState({name: event.target.value});
    	console.log("Changed: " + this.state.name)
  	}
	
	handleSubmit(event) {
    	//alert('A name was submitted: ' + this.state.name + ' : ' + this.state.template_id);
    	event.preventDefault();

		var msg = {name: this.state.name, template_id: this.state.template_id}
		console.log(msg)
    	superagent.post('/api/messages').set('Accept', 'application/json').send(msg).then((response) => {
    		console.log(response)
    		this.props.onSuccess()
    	});
  	}

 	render () {

 		return <form onSubmit={this.handleSubmit}>
			<label>
          		Name:
          		<input type="text" onChange={this.handleNameChange} />
        	</label>
        	<Dropdown placeholder='Select a template...' fluid selection options={this.state.templates} onChange={this.handleTemplateChange}/>
        	<input type="submit" value="Submit"/>
		</form>
 	}

}

NewMessage_old.propTypes = {
};

export default NewMessage_old;