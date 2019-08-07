import React from 'react';

const Instructions = ({ className }) => {
	return (
		<div className="flex flex-col w-full text-center text-lg mb-4">
			<p>The X represents your knight</p>
			<p className="">Move the knight through all the squares on the board without repeating a single square</p>
			<p className="">If you can't, you lose. GOOD LUCK!</p>
		</div>
		);
};

export default Instructions;
