var MessageSelect = createReactClass({
  propTypes: {
    object: PropTypes.string,
    field: PropTypes.string,
    selected: PropTypes.number,
  },

  getInitialState: function() {
    return {
      items: [],
      value: (this.props.selected == undefined) ? 0 : this.props.selected  
    };
  },

  componentDidMount() {
    $.getJSON('/api/'+this.props.field+'s', (response) => { this.setState({ items: response }) })
  },

  handleChange: function(event) {
    var value = event.target.value;
    console.log(value, " was selected");
    this.setState({value: event.target.value});
  },

  render: function() {
    console.log("SELECTED: " + this.state.value);
    console.log(this.state.items)

    var items= this.state.items.map((item) => {
          return (
            <option key={item.id} value={item.id}>{item.name}</option>
        )
    });
    
    return( 
      <select value={this.state.value} skip_default_ids="false" allow_method_names_outside_object="true" name={this.props.object + "[" + this.props.field +"_id]"} id={this.props.object+"_"+this.props.field+"_id"} onChange={this.handleChange} >
        <option key="0">Please Select</option>
        {items}  
      </select>
    )

  }
});

