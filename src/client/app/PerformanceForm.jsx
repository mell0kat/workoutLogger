import React from 'react';

class PerformanceForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			units:['reps', 'seconds', 'minutes', 'rounds']
		}
	}
	handleChange (factor, e) {
		console.log(e)
		let newData = {};
		newData[factor] = e.target.value;

		this.setState(newData);
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
					value={this.state.number}
					onChange={this.handleChange.bind(this, 'number')}></input>

				<label>Extra Reps:</label>
				<input type="number"
					value={this.state.reps}
					onChange={this.handleChange.bind(this, 'reps')}></input>

				<label>Time:</label>
				<input type="number"
					value={this.state.time}
					onChange={this.handleChange.bind(this, 'time')}></input>

				<label>Units:</label>


				<select
					onChange={this.handleChange.bind(this, 'units')} value=''>{options}</select>
				<input type="submit" value="Post"></input>
			</form>
			</div>
		);
	}

};

export default PerformanceForm;


