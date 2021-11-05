import Link from "next/link";
import { processTWClasses } from "../../../utils/twStringsProcessor";
import { linkData } from "../../../ts/componentsProps";

interface props {
  links: linkData[];
  classes?: string;
  containerClasses?: string;
}

const baseContainerClasses = " my-auto px-4 w-3/4";
const baseClasses = " cursor-default text-sm ";

const LinkGroup = (props: props) => {
  return (
    <div className={props.containerClasses ? processTWClasses(baseContainerClasses, props.containerClasses) : baseContainerClasses}>
      <div className="px-8 flex flex-row space-x-8">
        {props.links.map((link, index) => {
          return (
            <Link
              href={link.url ? link.url : "/"}
              as={link.as ? link.as : link.url}
              key={index}
            >
              <p
                className={
                  props.classes
                    ? processTWClasses(props.classes, baseClasses)
                    : baseClasses
                }
              >
                {" "}
                {link.text}{" "}
              </p>
            </Link>
          );
        })}
      </div>
      <hr className="shadow" />
    </div>
  );
};

export default LinkGroup;


