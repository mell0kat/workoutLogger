console.log('in app js')
'use strict';

let PerformanceForm = React.createClass({
	getInitialState: function() {
		return { units:['reps', 'seconds', 'minutes', 'rounds'] };
	},
	handleChange: function(e, factor) {
		this.setState({factor: e.target.value});
		console.log('this is the state LOOOK HERERERERERE:', this.state)
	},
	render: function() {
		let options=this.state.units.map(unit => {
			return (
				<option value={unit}>{unit}</option>
			);
		});
		return  (
			<div>
				<h3>Performance</h3>
				<form className="performanceForm" onSubmit={this.handleSubmit}>
				<label>Rounds:</label>
				<input type="number"
					value={this.state.number}
					onChange={this.handleChange.bind(this, 'number')}/>

				<label>Extra Reps:</label>
				<input type="number"
					value={this.state.reps}
					onChange={this.handleChange.bind(this, 'reps')}/>

				<label>Time:</label>
				<input type="number"
					value={this.state.time}
					onChange={this.handleChange.bind(this, 'time')}/>

				<label>Rounds:</label>
				<input type="units"
					value={this.state.rounds}
					onChange={this.handleChange.bind(this, 'units')}/>

				<input type="submit" value="Post"/>
				<select>{options}</select>
			</form>
			</div>
		);
	}
});

// let performanceSchema = new Schema({
//     rounds: Number,
//     extraReps: Number,
//     time: Number,
//     units: {
//       type: String,
//       enum: ['reps', 'seconds', 'mins']
//     },
//     weights:[Number]
// });

let Workout = React.createClass({
	//has this.props.boxes
	render: function(){
		console.log('this.props in Workout', this.props)
		let boxes = this.props.boxes.map(function(box) {
			console.log("this is a box:", box)
    		return (
				<WorkoutBox sections={box.sections} instructions={box.instructions} performance={box.performance}/>
				);
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

let ExerciseForm = React.createClass({
	getInitialState: function() {
		return {exerciseName: ''};
	},
	handleChange: function(e) {

		this.setState({exerciseName: e.target.value});

	},
	handleSubmit: function(e) {
		e.preventDefault(); // Is this what prevents page refresh?
		let exerciseName = this.state.exerciseName.trim();
		if (!exerciseName) { return };
		this.props.onExerciseSubmit({name: exerciseName});
		this.setState({exerciseName: ''});
	},
	// These <input> elements with a value set are called controlled components
	render: function(){
		return (
			<form className="exerciseForm" onSubmit={this.handleSubmit}>
				<label>Name of exercise:</label>
				<input type="text"
					value={this.state.exerciseName}
					onChange={this.handleChange}>
				</input>
				<input type="submit" value="Post"/>
			</form>)
	}
});

let WorkoutForm = React.createClass({


	loadExercisesFromServer: function() {
		console.log('about to load exercises with this url:', this.props.getExercisesUrl);

		$.ajax({
			url: this.props.getExercisesUrl,
			dataType: 'json',
			cache: false,
			method:'GET',
			success: function(data){
				console.log('in success?', data)
				this.setState({ exercises:data })
				console.log('state after getting exercise:', this.state)
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('could not find exercises!')
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	},
	componentDidMount: function(){
		console.log('workout form did mount')
		this.loadExercisesFromServer()
	},
	getInitialState: function() {
		return { showAddWorkoutForm: false, exercises:[] };
	},
	onClick: function(){
		this.setState({ showAddWorkoutForm: true})
	},
	render: function() {
		let options=this.state.exercises.map(exercise => {
			return (
				<option value={exercise.name}>{exercise.name}</option>
			);
		})
		return (
			<div>
				<button onClick={this.onClick}></button>
				{ this.state.showAddWorkoutForm ?
				<form className="workoutForm">
					Author:<input type="text" placeholder="author"/>
					Motto:<input type="text" placeholder="text"/>
					Date:<input type="date" placeholder="date"/>

					<select>{options}</select>
					// <p>Box</p>
					// Num:<input type="text" placeholder=""/>
					// Units:<input type="text" placeholder=""/>
					// Exercise:<input type="text" placeholder=""/>
					// Weight:<input type="number" placeholder=""/>
					// <input type="submit" value="Post"/>
					<PerformanceForm/>
				</form>

			: null
		}

				</div>
		);
	}
});

let WorkoutListAndForm = React.createClass({
	//has this.props.data
	loadWorkoutsFromServer: function(){
		console.log('about to mount')
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log('in success?', data)
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('could not find workouts!')
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function(){
		this.loadWorkoutsFromServer();
	},
	handleExerciseSubmit: function(exercise) {
		console.log('submitting new exercise..not sure what else to do yet')
		$.ajax({
			url: 'api/exercises',
			method: 'POST',
			data: exercise,
			dataType: 'json',
			success: function(data){
				console.log('in successful exercise post?', data)
				this.setState({ data: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('cannot submit new exercise')
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	},
	render: function() {
		console.log('this.props.data in WorkoutListAndForm', this.props)
		return (
			//Same as React.createElement('div')
			<div className="workoutListAndForm">
				<h1>Workouts</h1>
				<WorkoutList data={this.state.data} />
				<WorkoutForm getExercisesUrl={this.props.getExercisesUrl}/>
				<ExerciseForm className="exerciseForm" onExerciseSubmit={this.handleExerciseSubmit}/>
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
					<span>{section.modification}</span>
				</div>
			)
		})

		let performances = this.props.performance.map(function(performance){
			return (
				<div>
					<span>{performance.rounds}</span>
					<span>{performance.extraReps}</span>
					<span>{performance.time}</span>
					<span>{performance.units}</span>
					<span>{performance.weights}</span>
				</div>
			)
		})
		return (
			<div className="workoutBox">
				<h2>{this.props.instructions}</h2>
				 {workoutSections}
				 {performances}
			</div>
		)
	}
})


ReactDOM.render(
	<WorkoutListAndForm  url="api/workouts" getExercisesUrl='api/exercises'/>,
	document.getElementById('content')
);

// Native HTML elements start with lowercase, while custom React class names begin with uppercase letter
 // ReactDOM should be called last
