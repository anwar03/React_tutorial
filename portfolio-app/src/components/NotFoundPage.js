import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = (props) => {
    return (
    <div>
        <p>Page Not Found 404!. <Link to="/">Go home</Link> </p>
    </div>
    );
};

export default NotFoundPage;