import React from 'react';

class SectionForm extends React.Component {
	loadExercisesFromServer () {
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
		componentDidMount (){
		console.log('workout form did mount')
		this.loadExercisesFromServer()
	},
	getInitialState () {
		return { showAddWorkoutForm: false, exercises:[] };
	},
	onClick (){
		this.setState({ showAddWorkoutForm: true})
	},
	render () {
		let options=this.state.exercises.map(exercise => {
			return (
				<option value={exercise.name}>{exercise.name}</option>
			);
		})
		return (
			<div>
				<button onClick={this.onClick}></button>
				{ this.state.showAddWorkoutForm ?
				<form className="sectionForm">
					Num:<input type="number" placeholder="Num"></input>
					Units:
						<select>
							<option value="reps">reps</option>
							<option value="lbs">lbs</option>
							<option value="seconds">seconds</option>
							<option value="minutes">minutes</option>
						</select>

					Exercise:<select>{options}</select>
					Modification: <input type="text"></input>

				</form>

				: null
			}

			</div>
		);
	}


};

export default SectionForm;




