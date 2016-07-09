import React from 'react';

class Workout extends React.Component {

	render (){
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
};

export default Workout;
