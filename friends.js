
/*
var USER_DATA = { 
	name: 'David Lambert',
	username: 'dlamb3244',
	image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAhJAAAAJDM2MmQ0OGE0LTE4YTMtNGY0Ni05Yjg4LTA5ZjE0Y2RjN2E3Nw.jpg'
}

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}} />
		)
	}
});


var Link = React.createClass({
		
	changeURL: function() {
		window.location.replace(this.props.href)
	},

	render: function() {
		return (
			<span style={{color: 'blue', cursor: 'pointer'}}
			onClick={this.changeURL}>
			{this.props.children}
			</span>
		)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://www.linkedin.com/in/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Avatar = React.createClass({
	
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
})

var Hello = React.createClass({
	
	propTypes: {
		name: React.PropTypes.string,
	},
	
	getDefaultProps: function() {
		return {
			name: 'Ash',
		};
	},
	
	render: function() {
	
		return (
			<div>Hello {this.props.name}</div>
		)
	}
});


var FriendsCon = React.createClass({
	
	propTypes: {
		name: React.PropTypes.string,
		friends: React.PropTypes.arrayOf(
			React.PropTypes.string,
		)
	},
	
	render: function() {
		return (
			<div>
				<h3>Name: {myName}</h3>
				<ShowList names={myFriends} />
			</div>
		)
	}
});

var ShowList = React.createClass({
	render: function() {
		var listNames = this.props.names.map(function(friend, idx) {
			return <li key={idx}>{friend}</li>;
		});
		
		return (
			<div>
				<h3>Friends</h3>
				<ul>
					{listNames}
				</ul>
			</div>
		)
	}
});


var myName = 'Sam';
var myFriends = ['Ash', 'Pat', 'David', 'Dan', 'Joe'];
*/

//ReactDOM.render(<FriendsCon name={myName} friends={myFriends}/>, document.getElementById('app'));
/*
ReactDOM.render(<Avatar user={USER_DATA} />,
	document.getElementById('app')
);*/

