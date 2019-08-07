import React, { Component} from 'react';

import Square from './Square.js';

import compareArrays from '../functions/compareArrays';
import arrayInArrayCheck from '../functions/arrayInArrayCheck'
import numberGenerator from '../functions/numberGenerator';

class Grid extends Component {
	state = {
		currentPosition: 0,
		listOfSquares: [],
	}

	checkWin = (X)=>{
		if(compareArrays(X,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64])){
			this.props.winning()
		}
	}

	checkLose = (X)=>{
		// console.log(arrayInArrayCheck([1,2,4],[1,2,4,5,6,7]))
		let theRedSquares = []
		let theSquares = document.getElementsByClassName('squareKnights');
		for (let i = 0; i<theSquares.length; i++){
			if (theSquares[i].classList.contains('bg-red-400')){
				theRedSquares.push(i+1)
			}
		}
		if(arrayInArrayCheck(numberGenerator(X), theRedSquares)){
			this.props.losing()
		}
	}

	newPosition = (x)=>{
		this.setState((prevState, props)=>({
		  currentPosition: x,
		  listOfSquares: prevState.listOfSquares.concat([x])
		}),function(){
		this.checkWin(this.state.listOfSquares)
		this.checkLose(this.state.currentPosition)
		}

		);
	}

	eraseKnights = ()=>{
		let theSquares = document.getElementsByClassName('squareKnights');
		for (let i = 0; i<theSquares.length; i++){
			theSquares[i].innerHTML = ''
		}
	}

	addColor = () => {
		let theSquares = document.getElementsByClassName('squareKnights');
		for (let i = 0; i<theSquares.length; i++){
			if (theSquares[i].classList.contains('red') && theSquares[i].innerHTML ===''){
				theSquares[i].className += ' bg-red-400'
			}
		}
	}

	render() {
	let squares = []
	for (let i=0; i<64; i++){
		squares.push(
			<div key = {i}>
				<Square previousPosition={this.state.currentPosition} newPosition={this.newPosition} value = {i} eraseKnights = {this.eraseKnights} addColor={this.addColor}/>
			</div>	
		)
	}
		return (
			<div className="text-red-800 justify-center " style = {{
				display: 'grid',
				gridTemplateColumns: 'repeat(8,4rem)',
				gridTemplateRows: 'repeat(8, 4rem)',
			}}>
				{squares}
    	</div>
        );
    }
}

export default Grid;
