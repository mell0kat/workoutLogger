import React from 'react';

class WorkoutForm extends React.Component {
	getInitialState () {
		return {author: '', text:'', date:'',  boxes: []}
	},
	handleChange (e, factor) {
		this.setState({factor: e.target.value});
		console.log('State after updating workout', this.state)
	},
	handleSubmit (e) {
		e.preventDefault();
		let author = this.state.author.trim();
		let text = this.state.text.trim();
		let date = this.state.date.trim();
		// TODO: send post request

		//empty things out again
		this.setState({author: '', text:'', date:'',  boxes: []})

	},
	render () {
		return (
			<div><h3>WorkoutForm!!</h3>
	      <form className="workoutForm" onSubmit={this.handleSubmit}>
	        <input
	          type="text"
	          placeholder="Coach name"
	          value={this.state.author}
	          onChange={this.handleChange.bind(this, 'author')}
	        />
	        <input
	          type="text"
	          placeholder="Workout motto...?"
	          value={this.state.text}
	          onChange={this.handleChange.bind(this, 'text')}
	        />
	         <input
	          type="date"
	          placeholder="Workout date"
	          value={this.state.date}
	          onChange={this.handleChange.bind(this, 'date')}
	        />
	        <input type="submit" value="Post" />
	      </form>
      </div>
    );
	}

};

export default WorkoutForm;

