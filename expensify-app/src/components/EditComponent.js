import React from 'react'

const EditComponent = (props) => {
    console.log(props);
    console.log(props.location);
    return (
    <div>
        <p>This is Expensify Edit Page id of {props.match.params.id}</p>
    </div>
    );
};

export default EditComponent;