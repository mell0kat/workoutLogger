
let WorkoutList = React.createClass({
	render: function(){
		let workoutNodes = this.props.data.map(function(workout){
			return (
				<Workout author={workout.author} key={workout.id}>
				 {workout.text}
				</Workout>
			);
		})
		return (
			<div className="workoutList">
				{workoutNodes}
			</div>
		);
	}
})

let WorkoutForm = React.createClass({
	render: function() {
		return (
			<div className="workoutForm">
			Hello! I am workoutForm.
			</div>
		);
	}
});

let WorkoutBox = React.createClass({
	render: function() {
		return (
			//Same as React.createElement('div')
			<div className="workoutBox">
				<h1>Workouts</h1>
				<WorkoutList data={this.props.data} />
				<WorkoutForm/>
			</div>

		);
	}
})

let Workout = React.createClass({
	rawMarkup: function() {
		let rawMarkup = marked(this.props.children.toString(), {sanitize:true});
		return {__html: rawMarkup};
	},
	render: function() {
			return (
				<div className="workout">
					<h2 className="workoutCreator">
						{this.props.author}
					</h2>
					<span dangerouslySetInnerHTML={this.rawMarkup()}/>
				</div>
			);
		}
	})

let data = [
	{id:1, author: 'Kat', text:'Runners high for dayz'},
	{id:2, author: 'Nucc', text:'Channel your inner Shaun T'}
];

ReactDOM.render(
	<WorkoutBox data={data}/>,
	document.getElementById('content')
);

// Native HTML elements start with lowercase, while custom React class names begin with uppercase letter
 // ReactDOM should be called last