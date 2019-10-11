import React from 'react'
import { Link } from 'react-router-dom'


const PortfolioComponent = () => {
    return (
    <div>
        <p>This is Portfolio page</p>
        <Link to="/portfolio/1">Item one</Link>
        <Link to="/portfolio/2">Item two</Link>
    </div>
    );
};

export default PortfolioComponent;