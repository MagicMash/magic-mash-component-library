import React from 'react'
import { buttonTypes, classes, withIcon } from '../../ts/componentsProps'

interface props {
    children?: React.ReactChildren,
    type: buttonTypes,
    classes?: classes,
    withIcon?: withIcon,
}

const baseProps : props = {
    children: undefined,
    type: 'button',
    classes: null,
    
    withIcon: false,
}

const baseClasses = ' base classes '

const Button = (props = baseProps ) => {

    let twClasses = props.classes ? props.classes.concat(baseClasses) : baseClasses

    return(
        <button className={twClasses} type={props.type} >

        </button>
    )
}