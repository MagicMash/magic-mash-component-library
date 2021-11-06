import Link from "next/link";
import { processTWClasses } from "../../../utils/twStringsProcessor";
import { linkData } from "../../../ts/componentsProps";

interface props {
  links: linkData[];
  classes?: string;
  containerClasses?: string;
  linkColor?: string;
}

const baseContainerClasses = " my-auto px-4 w-3/4";
const baseClasses =
  " cursor-pointer text-sm hover:transform hover:transition hover:scale-110 ";

const LinkGroup = (props: props) => {
  return (
    <div
      className={
        props.containerClasses
          ? processTWClasses(baseContainerClasses, props.containerClasses)
          : baseContainerClasses
      }
    >
      <div className="px-8 flex flex-row space-x-8 border-b-2">
        {props.links.map((link, index) => {
          return (
            <div key={index}>
              {link.withIcon && link.icon ? (
                <div onClick={link.handler}>{link.icon}</div>
              ) : (
                <Link
                  passHref
                  href={link.url ? link.url : "/"}
                  as={link.as ? link.as : link.url}
                >
                  <p
                    style={props.linkColor ? { color: props.linkColor } : {}}
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
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default LinkGroup;
