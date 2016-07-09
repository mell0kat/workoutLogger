import React from 'react';

class WorkoutBox extends React.Component {

	render() {
		console.log('this.props in WorkoutBox', this.props)
		let workoutSections =  this.props.sections.map(function(section){
			return (
				<div>
					<span>{section.num} </span>
					<span>{section.units} </span>
					<span>{section.exercise} </span>
					<span>{section.modification}</span>
				</div>
			)
		})

		let performances = this.props.performance.map(function(performance){
			return (
				<div>
				<h2>Performance:</h2>
					<span>{performance.rounds} </span>
					<span>{performance.extraReps} </span>
					<span>{performance.time} </span>
					<span>{performance.units} </span>
					<span>{performance.weights}</span>
				</div>
			)
		})
		return (
			<div className="workoutBox">
				<h2>Instructions: {this.props.instructions}</h2>
				 {workoutSections}
				 {performances}
			</div>
		)
	}
};

export default WorkoutBox;
