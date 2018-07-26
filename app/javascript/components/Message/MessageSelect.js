// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import superagent from 'superagent';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import store from "../../store/index";

class MessageSelect extends React.Component {
	state = { modalOpen: false }

	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })

	constructor(props) {
		super(props);
		this.state = {
  			items: [],
  			value: (this.props.selected == undefined) ? 0 : this.props.selected  
		};
	}

	componentDidMount() {
		const url='/api/'+this.props.field+'s';
		superagent.get(url).query({ format: 'json' }).end ((error, response)=>{
            this.setState({
              items:response.body
            })
		})
		console.log("VAL: " + this.state.value)
		window.store = store;
	}

	handleChange(event) {
	    var value = event.target.value;
	    console.log(value, " was selected");
	    this.setState({value: value});
 	}

 	onModalSuccess(event) {
 		console.log("close this bad boy")
 	}

  	render () {
		console.log("SELECTED: " + this.state.value);

	    if (this.state.items != undefined) {
		    var items= this.state.items.map((item) => {
		          return (
		            <option key={item.id} value={item.id}>{item.name}</option>
		        )
		    });
		}

	    return( 
	      	<div>
		      	<select value={this.state.value} skip_default_ids="false" allow_method_names_outside_object="true" name={this.props.object + "[" + this.props.field +"_id]"} id={this.props.object+"_"+this.props.field+"_id"} onChange={this.handleChange.bind(this)} >
		        	<option key="0">Please Select</option>
	    	    	{items}  
	      		</select>
	        	<Modal 
	        		trigger={<Button size='mini' type='button' onClick={this.handleOpen}>Create Message</Button>}
	        		open={this.state.modalOpen}
        			onClose={this.handleClose}>
			    	<Modal.Header>Create New Message</Modal.Header>
			    	<Modal.Content image>
				      	<Modal.Description>
				      		
			      		</Modal.Description>
			    	</Modal.Content>
			  	</Modal>		
	      	</div>
	      
	    )
  	


  	}
}

MessageSelect.propTypes = {
    object: PropTypes.string,
    field: PropTypes.string,
    selected: PropTypes.number,
};

export default MessageSelect;