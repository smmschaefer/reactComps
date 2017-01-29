var countDown = React.createClass({

			displayName: 'countDown',

			propTypes: {
				secondsRemaining: React.PropTypes.number,
			},

			getDefaultProps: function() {
				return {
					secondsRemaining: 10,
				};
			},
			
  			getInitialState: function() {
    			return {
     				 secondsRemaining: 0,
    			};
  			},

  			tick: function() {
  			  this.setState({
  			  	secondsRemaining: this.state.secondsRemaining - 1});
   			 if (this.state.secondsRemaining <= 0) {
   			   clearInterval(this.interval);
   				 }
 			 },

 			componentDidMount: function() {
  			  this.setState({ 
  			  	secondsRemaining: this.props.secondsRemaining 
  			  });
   			 	this.interval = setInterval(this.tick, 1000);
  			},

  			componentWillUnmount: function() {
  			  clearInterval(this.interval);
  			},

  			render: function() {
    			return (
     			 React.DOM.div(null, "Seconds Remaining: ", this.state.secondsRemaining)
   				 );
  				}
			});

		  ReactDOM.render(
				React.createElement(countDown),
				document.querySelector("#output")
			);

