import React from 'react';

class ExerciseForm extends React.Component {

	getInitialState () {
		return {exerciseName: ''};
	},
	handleChange (e) {

		this.setState({exerciseName: e.target.value});

	},
	handleSubmit (e) {
		e.preventDefault(); // Is this what prevents page refresh?
		let exerciseName = this.state.exerciseName.trim();
		if (!exerciseName) { return };
		this.props.onExerciseSubmit({name: exerciseName});
		this.setState({exerciseName: ''});
	},
	// These <input> elements with a value set are called controlled components
	render (){
		return (
			<form className="exerciseForm" onSubmit={this.handleSubmit}>
				<label>Name of exercise:</label>
				<input type="text"
					value={this.state.exerciseName}
					onChange={this.handleChange}></input>
				<input type="submit" value="Post"></input>
			</form>)
	}

};

export default ExerciseForm;

