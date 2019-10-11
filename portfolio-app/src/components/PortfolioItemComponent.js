import React from 'react'

const PortfolioItemComponent = (props) => {
    return (
    <div>
        <p>This is Portfolio Page id of {props.match.params.id}</p>
    </div>
    );
};

export default PortfolioItemComponent;
