import Button from 'react-bootstrap/Button';
import React from "react";
import AddEmployeeForm from '../AddEmployeeForm';


const CommonButton = (props) => {


    return (
        <>
            <Button className={props.classData} style={props.styleData} variant={props.variant} onClick={props.buttonClick}>{props.icon}{props.title}</Button>
        </ >
    )
}

export default CommonButton