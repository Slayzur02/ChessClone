import React, { Component} from 'react';

import numberGenerator from '../functions/numberGenerator'

class Square extends Component {
	addKnight = (e)=>{
		let newSquare = e.target
		if (!newSquare.classList.contains('bg-red-400') &&
			numberGenerator(parseInt(this.props.previousPosition)).indexOf(parseInt(newSquare.id)) !== -1
			){
			this.props.eraseKnights()
			e.target.innerHTML = 'X'
			e.target.className += ' red'
			this.props.addColor()
			this.props.newPosition(parseInt(newSquare.id))

		}
	}
    	render() {
        return (
            <div id={this.props.value+1} className = "squareKnights text-xl shadow-inner bg-gray-200 border border-black w-16 h-16 table-cell align-middle" onClick = {this.addKnight}>
		</div>
        );
    }
}

export default Square;
