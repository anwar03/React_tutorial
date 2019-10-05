import React from 'react'

const Action = (props) => {
    return (
            <div>
                <button className="big-btn"
                    onClick={ props.handleMakeDecision }
                    disabled={ !props.hasOptions }
                >
                    what should I do?
                </button>
            </div>
    );
};

export default Action;