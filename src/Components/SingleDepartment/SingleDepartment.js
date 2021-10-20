import React from 'react';
import './SingleDepartments.css';

const SingleDepartment = (props) => {
    const {heading, paragraph} = props;
    return (
        <div classname="department-item">
            <h3 className="red-text mb-4">{heading}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default SingleDepartment;