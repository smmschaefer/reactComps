/************
This component creates a Text Area and outs as updated the character amount in the text area

***********/


let TextAreaCounter = React.createClass({
			
			propTypes: {
				text: React.PropTypes.string,
			},

			getDefaultProps: function() {
				return {
					 text: '',
				};
			},

			getInitialState: function() {
				return {
					text: this.props.text,
				};
			},

			_textChange: function(ev) {
				this.setState({
					text: ev.target.value,
				});
			},

			render: function() {
				return React.DOM.div(null, 
					React.DOM.textarea({
						value: this.state.text,
						onChange: this._textChange,
					}),
					React.DOM.h3(null, this.state.text.length)
					);
			}

		});

