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
  iconHeigth?: number;
  outLined: boolean;
  onClick: VoidFunction;
}

const baseProps: props = {
  children: undefined,
  type: "button",
  withIcon: false,
  text: "action",
  outLined: false,
  onClick: () => {},
};

const withIconClasses = " flex flex-row items-center justify-around ";
const baseIcon = "/icons/generic.svg";

let baseClasses =
  "filter drop-shadow-3xl rounded-xl p-2 w-32 shadow-md text-white bg-darkBlue";
const outlinedClasses =
  "filter drop-shadow-3xl rounded-xl p-2 w-32 shadow-md text-darkBlue border border-darkBlue ";

const withIcon = (
  text?: string,
  icon?: string,
  alt?: string,
  classes?: string,
  width?: number,
  heigth?: number
) => {
  return (
    <>
      <p>{text}</p>
      <Image
        className={classes ? classes : " "}
        src={icon ? icon : baseIcon}
        width={width ? width : "20"}
        height={heigth ? heigth : "20"}
        alt={alt ? alt : "no alt provided for this icon"}
      />
    </>
  );
};

const noIcon = (text?: string) => {
  return <p>{text}</p>;
};

const Button = (props: props) => {
  if (props.outLined) {
    baseClasses = outlinedClasses;
  }

  if (props.withIcon) {
    baseClasses = baseClasses + withIconClasses;
  }

  let twClasses = props.classes
    ? processTWClasses(baseClasses, props.classes)
    : baseClasses;

  return (
    <button onClick={props.onClick} className={twClasses} type={props.type}>
      {props.withIcon ? withIcon(props.text, props.icon, props.iconAlt, props.iconClasses, props.iconWidth, props.iconHeigth) : noIcon(props.text)}
    </button>
  );
};

Button.defaultProps = baseProps;

export default Button;
