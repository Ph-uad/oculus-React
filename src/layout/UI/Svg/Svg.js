import React from 'react';
import classes from './svg.module.css'
import Sprite from '../../../Assets/icons/sprite.svg'

const SVG = (props) => {
    return (
        <span className={"flex svg-container"}>
          {props.Id &&  <svg className={classes.svg}>  <use className={classes.icon} href={`${Sprite}${props.Id}`}></use> </svg> }
        </span>
    );
}

export default SVG;