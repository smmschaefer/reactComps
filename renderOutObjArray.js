/*
//Render out an array of string in React
const dataArray = ["sam", "ash", "john"];
const renData = this.props.dataA.map((data, idx) => {
	return <p key={idx}>{data}</p>
});
*/

const theData = [
	{
		name: 'Sam',
		email: 'somewhere@gmail.com'
	},
	
	{
		name: 'Ash',
		email: 'something@gmail.com'
	}
];

	const renObjData = this.props.data.map( ( anObjectMapped, index ) => {
   		 	return (<p key={index}>
						Name: {anObjectMapped.name} < br/>
						Email: {anObjectMapped.email} <br /></p>
			)
		});

//state
			const renObjData = this.state.data.map( (anObjectMapped, index) => {
		 	return (<p key={index}>
						Name: {anObjectMapped.name} < br/>
						Email: {anObjectMapped.email} <br /></p>
			)
		});