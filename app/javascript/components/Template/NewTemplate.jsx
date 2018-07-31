import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { newTemplate, saveTemplate} from '../../actions/template-actions.jsx';
import TemplateForm from './TemplateForm.jsx';

class NewTemplate extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.newTemplate();
	}

	submit = (template) => {
    	return this.props.saveTemplate(template)
      		.then(response => {
      			console.log("HERE")
      			this.props.onSubmit()
      		})
      		.catch(err => {
         	throw new SubmissionError(this.props.errors)
       	})

	}

	render() {
		const { onSubmit } = this.props;

		return (
			<div>
				<TemplateForm template={this.props.template}  loading={this.props.loading} onSubmit={this.submit}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
      templates : state.templateStore.messages,
      errors: state.templateStore.errors
  }
}

export default connect(mapStateToProps, {newTemplate, saveTemplate})(NewTemplate);