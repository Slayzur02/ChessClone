import React, {Component} from 'react';

import Grid from './components/grid.js'
import Instructions from './components/instructions.js'

class App extends Component {
	state = {
		Won: false,
		Lost: false,
	}

	winning = ()=>{
		this.setState({
		  Won: true,
		});
	}

	losing = ()=>{
		this.setState({
		  Lost: true,
		});
	}

	reset = ()=>{
		this.setState({
		  Won: false,
		  Lost: false,
		});
	}

	render(){
		let grid
	if (this.state.Won ===this.state.Lost){
		grid = 
		<div>
			<Instructions/>
			<Grid winning = {this.winning} losing = {this.losing}/>
		</div>
	}
	else if (this.state.Won ===true){
		grid = 
			<div>
				YOU'VE WON
				<button onClick = {this.reset}>Try again?</button>
			</div>
	}
	else if (this.state.Won === false && this.state.Lost === true){
		grid = 
			<div >
				<div className = "text-2xl my-0">Nani?</div>
				<div className = "text-6xl my-0">It appears that you suck</div>
				<button className = "border-2 mb-4 p-2 border-gray-600 text-xl bg-red-200">Do nothing</button>
				<br/>
				<button className = "border-2 border-gray-600 p-2 text-xl bg-green-200" onClick = {this.reset}>You haven't witnessed my true power</button>
			</div>
	}
	return (
			<div className="text-center m-8 flex flex-col">
					{grid}
			</div>
		
		);
	}
}

export default App;