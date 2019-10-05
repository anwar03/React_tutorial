import React from 'react'
import Option from './Option'

const  Options = (props) => {
	return (
		<div>
			<div className="widget-header">
				<h3 className="title">Options</h3>
				<button
				 onClick={ props.handleDeleteOptions }
				>
				Remove All</button>
			</div>
				{props.options.length === 0 && <p className="empty-option">Please add an option to get started.</p>}
				{
					props.options.map((option, index) => (
						<Option 
							key={ option } 
							counter={index + 1}
							option={ option }
							handleDeleteOption={ props.handleDeleteOption } />
					))
				}
		</div>
	);
};

export default Options; 