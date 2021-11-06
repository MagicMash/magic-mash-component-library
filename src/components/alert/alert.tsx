import { ReactNode } from "react";
import { alertData } from "../../ts/componentsProps";
import { processTWClasses } from "../../utils/twStringsProcessor";

interface props {
  children?: ReactNode;
  classes?: string;
  contentContainerClasses?: string;
  titleClasses?: string;
  textClasses?: string;
  alert: alertData;
  handler?: () => void;
  closeAlertHandler?: () => void;
}

const baseClasses =
  " w-11/12 flex flex-row justify-between py-2 px-6 h-16 items-center shadow-xl rounded-lg ";

const basecontentContainerClasses = "flex flex-row w-2/4";
const baseTitleClasses = "my-auto font-semibold text-lg ";
const baseTextClasses = "ml-8 my-auto ";

const Alert = (props: props) => {
  return (
    <div
      className={
        props.classes
          ? processTWClasses(baseClasses, props.classes)
          : baseClasses
      }
    >
      <div
        className={
          props.contentContainerClasses
            ? processTWClasses(
                basecontentContainerClasses,
                props.contentContainerClasses
              )
            : basecontentContainerClasses
        }
      >
        <h2
          className={
            props.titleClasses
              ? processTWClasses(baseTitleClasses, props.titleClasses)
              : baseTitleClasses
          }
        >
          {props.alert.title}
        </h2>
        <p
          className={
            props.textClasses
              ? processTWClasses(baseTextClasses, props.textClasses)
              : baseTextClasses
          }
        >
          {props.alert.text}
        </p>
      </div>
      {props.children}
      <svg
        onClick={props.closeAlertHandler}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer hover:transform hover:transition hover:scale-105"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Alert;
