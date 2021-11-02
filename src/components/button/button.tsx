import React, { FC } from "react";
import { buttonTypes, classes } from "../../ts/componentsProps";
import { processTWClasses } from "../../utils/twStringsProcessor";
import Image from "next/image";

interface props {
  children?: React.ReactChildren;
  type?: buttonTypes;
  classes?: classes;
  withIcon?: boolean;
  icon?: string;
  text?: string;
  iconAlt?: string;
  iconClasses?: string;
  iconWidth?: number;
  iconHeigth?: number
}

const baseProps: props = {
  children: undefined,
  type: "button",
  withIcon: false,
  text: "action",
};

const notIconClasses = "without icon classes ";
const withIconClasses = "with icon classes ";
const baseIconClasses = "icon base classes ";
const baseIcon = "/generic.svg"

let baseClasses = notIconClasses;

const withIcon = (text?: string, icon?: string, alt?: string, classes?: string, width?: number, heigth?: number ) => {
  return (
    <>
      <p>{text}</p>
      <Image className={classes ? classes : baseIconClasses} src={icon ? icon : baseIcon } width={width ? width : '20'} height={heigth ? heigth : '20'} alt={alt ? alt : 'no alt provided for this icon'} />
    </>
  );
};

const noIcon = (text?: string) => {
    return(
        <p>
            {text} 
        </p>
    )
}

const Button = (props: props) => {
  if (props.withIcon) {
    baseClasses = withIconClasses;
  }

  console.log(props)

  let twClasses = props.classes
    ? processTWClasses(baseClasses, props.classes)
    : baseClasses;

  return (
    <button className={twClasses} type={props.type}>
      { props.withIcon ? withIcon(props.text) : noIcon(props.text) }
    </button>
  );
};

Button.defaultProps = baseProps

export default Button;
