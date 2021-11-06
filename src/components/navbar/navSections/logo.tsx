import Link from "next/link";
import Image from "next/image";
import { processTWClasses } from "../../../utils/twStringsProcessor";

interface props {
  url?: string;
  as?: string;
  img: string;
  alt?: "";
  classes?: string;
}

const baseClasses =
  " rounded-full cursor-pointer hover:transition hover:transform hover:scale-105 hover:duration-300 ";

const Logo = (props: props) => {
  return (
    <div className="flex flex-col items-start ">
      <Link
        href={props.url ? props.url : "/"}
        passHref
        as={props.as && props.url ? props.as : props.url ? props.url : "/"}
      >
        <a>
          <Image
            src={props.img}
            className={
              props.classes
                ? processTWClasses(baseClasses, props.classes)
                : baseClasses
            }
            height={50}
            width={50}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
