import React from 'react';

class WorkoutList extends React.Component {

	render (){
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


};

export default WorkoutList;



