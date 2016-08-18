import React from 'react';

import WorkoutList from './WorkoutList.jsx';

// import WorkoutForm from './WorkoutForm.jsx';

import SectionForm from './SectionForm.jsx';

import ExerciseForm from './SectionForm.jsx';

import PerformanceForm from './PerformanceForm.jsx';



class WorkoutListAndForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	loadWorkoutsFromServer() {

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log('got workouts from server:', data)
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err) {

				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	}
	componentDidMount (){
		this.loadWorkoutsFromServer();
		// See below for possible way to poll for changes
		// setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	handleExerciseSubmit (exercise) {
		console.log('submitting new exercise..not sure what else to do yet')
		$.ajax({
			url: 'api/exercises',
			method: 'POST',
			data: exercise,
			dataType: 'json',
			success: function(data){
				console.log('in successful exercise post?', data)
				this.setState({ exercises: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('cannot submit new exercise')
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		})
	}
	render() {
		return (
			//Same as React.createElement('div')
			<div className="workoutListAndForm">
				<h1>Workouts</h1>
				<WorkoutList data={this.state.data} />

				<SectionForm className="sectionForm" getExercisesUrl={this.props.getExercisesUrl}/><button>Add another section</button>
				<ExerciseForm className="exerciseForm" onExerciseSubmit={this.handleExerciseSubmit}/>

				<PerformanceForm/>
			</div>
		)
	}
};

export default WorkoutListAndForm;



