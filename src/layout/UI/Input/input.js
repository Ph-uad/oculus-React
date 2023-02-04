import React,{ forwardRef } from "react";
import Classes from './input.module.css';


const Input = forwardRef((props, ref) => {

    return(
        <>
        <input ref={ref} {...props.attribute}></input>
        <label htmlFor={props.for}  className={Classes['form-label']}>{props.children}</label>
        </>
    )
});

export default Input;