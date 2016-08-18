import React from 'react';

/**

	What is a controlled component?
		React is setting the value of a component

	Uncontrolled:
		React is not setting the value..it is only responding to a change

**/
class PerformanceForm extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			rounds: 0,
	    extraReps: 0,
	    time: 0,
	    units: ['reps', 'seconds', 'minutes', 'rounds'],
	    weights:[]
		}
	}
	handleChange (factor, e) {
		console.log(factor, e)
		let newData = {};
		newData[factor] = e.target.value;
		console.log('newData:', newData)
		this.setState(newData);
		console.log('this.state:', this.state)
	}
	render () {
		let options = this.state.units.map( (unit, idx) => {
			return (
				<option value={unit} key={idx}>{unit}</option>
			);
		});
		// Inputs that have a value and affect the state are called controlled components

		return  (
			<div>
				<h3>Performance Form</h3>
				<form className="performanceForm" onSubmit={this.handleSubmit}>
				<label>Rounds:</label>
				<input type="number"
					value={this.state.rounds}
					onChange={this.handleChange.bind(this, 'rounds')}></input>

				<label>Extra Reps:</label>
				<input type="number"
					value={this.state.extraReps}
					onChange={this.handleChange.bind(this, 'extraReps')}></input>

				<label>Time:</label>
				<input type="number"
					value={this.state.time}
					onChange={this.handleChange.bind(this, 'time')}></input>

				<label>Units:</label>
				<select
					onChange={this.handleChange.bind(this, 'units')} value={this.state.units}>{options}</select>
				<input type="submit" value="Post"></input>
			</form>
			</div>
		);
	}

};

export default PerformanceForm;


