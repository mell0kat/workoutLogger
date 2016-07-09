import React from 'react';

class PerformanceForm extends React.Component {

	getInitialState () {
		return { units:['reps', 'seconds', 'minutes', 'rounds'] };
	},
	handleChange (e, factor) {
		this.setState({factor: e.target.value});

	},
	render () {
		let options=this.state.units.map(unit => {
			return (
				<option value={unit}>{unit}</option>
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


				<select value={this.state.units}
					onChange={this.handleChange.bind(this, 'units')}>{options}</select>
				<input type="submit" value="Post"></input>
			</form>
			</div>
		);
	}

};

export default PerformanceForm;


