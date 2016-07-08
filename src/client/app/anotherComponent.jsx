import React from 'react';

class WorkoutList extends React.Component {
	//has this.props.data

	render(){
		console.log('this.props in WorkoutList', this.props)
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
}

export default WorkoutList;
