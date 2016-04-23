'use strict'
let Workout = React.createClass({
	//has this.props.boxes
	render: function(){
		console.log('this.props in Workout', this.props)
		let boxes = this.props.boxes.map(function(box) {
			console.log("this is a box:", box)
    		return ( 
				<WorkoutBox sections={box.sections} instructions={box.instructions} performance={box.performance}/>
				)
			})
		return (
			<div className="workout">
				<h2 className="workoutAuthor">
					Author: {this.props.author}
				</h2>
				<h2 className="workoutDate">
					Date: {this.props.date}
				</h2>
				{boxes}
			</div>
		);
	}

})


let WorkoutList = React.createClass({
	//has this.props.data
	
	render: function(){
		console.log('this.props.data in WorkoutList', this.props.data)
		let workoutNodes = this.props.data.map(function(workout){
			return (
				<Workout author={workout.author} date={workout.date} key={workout.id} boxes={workout.boxes}>
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
				Num:<input></input>
				Units:<input></input>
				Exercise:<input></input>
				Weight:<input></input>
			</div>
		);
	}
});

let WorkoutListAndForm = React.createClass({
	//has this.props.data
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	},
	render: function() {
		console.log('this.props.data in WorkoutListAndForm', this.props.data)
		return (
			//Same as React.createElement('div')
			<div className="workoutListAndForm">
				<h1>Workouts</h1>
				<WorkoutList data={this.state.data} />
				<WorkoutForm/>
			</div>

		);
	}
})
//sections={box.sections} instructions={box.instructions} performance={box.performance}
let WorkoutBox = React.createClass({
	
	render: function() {
		console.log('this.props in WorkoutBox', this.props)
		let workoutSections =  this.props.sections.map(function(section){
			return (
				<div>
					<span>{section.num} </span>
					<span>{section.units} </span>
					<span>{section.exercise}</span>
				</div>
			)
		})
		return (
			<div className="workoutBox">
				<h2>{this.props.instructions}</h2>
				<h2>{this.props.performance}</h2>
				{workoutSections}
			</div>
		)
	}
})


ReactDOM.render(
	<WorkoutListAndForm  url="/api/comments"/>,
	document.getElementById('content')
);

// Native HTML elements start with lowercase, while custom React class names begin with uppercase letter
 // ReactDOM should be called last