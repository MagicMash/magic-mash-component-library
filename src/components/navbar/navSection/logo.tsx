import Link from "next/link";
import Image from "next/image";
import { processTWClasses } from "../../../utils/twStringsProcessor";

interface props {
  url: string;
  as?: string;
  img: string;
  classes?: string;
}

const baseClasses = " rounded-full ";

const Logo = (props: props) => {
  return (
    <div className="flex flex-col items-start">
      <Link href={props.url} as={props.as ? props.as : props.url}>
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
      </Link>
    </div>
  );
};

export default Logo;


