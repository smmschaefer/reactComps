import React, { Component } from 'react';
import './App.css';



class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '/* add JSX HERE */',
			output: '',
			err: ''
		}
		
	}
	
	update(e) {
		let code = e.target.value;
		try {
			this.setState({
				output: window.Babel
				.transform(code, { presets: ['es2015', 'react']})
				.code,
				err: ''
			})
		}
		catch(err) {
			this.setState({ err: 'err.message' })
		}
	}
	
	render() {
		return(
			<div>
				<header>{this.state.err}</header>
				<div className="container">
					<textarea
						onChange={this.update.bind(this)} 
						defaultValue={this.state.input}/>
					<pre>
						{this.state.output}
					</pre>
				</div>
			</div>
		)
	}
}

export default App;




//********************
CSS FOR THIS
********************//


body {
	margin: 0;
	padding: 0;
	font-family: monospace;
}

header {
	display: block;
	height: 50px;
	overflow: auto;
	background-color: pink;
	color: red;
	font-size: 28px;
}

.container {
	height: 95vh;
	display: flex;
}

pre {
	background-color: #f8f8f8;
}

pre, textarea {
	width: 50%;
	font-family: monospace;
	font-size: 28px;
	margin: 0;
	padding: 10px;
	color: #222;
}

textarea: focus {outline: 0}


<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js"></script>
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>


