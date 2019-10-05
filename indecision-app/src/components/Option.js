import React from 'react'

const Option = (props) => {
	return (
		<div className="option">
			<p className="option-item"> {props.counter }: { props.option }</p>
			
			<button 
				onClick={ () => {
					props.handleDeleteOption(props.option); 
				}} 
			>
				Remove
			</button>
		</div>
	);
};

export default Option;