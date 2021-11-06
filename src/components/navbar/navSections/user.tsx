import { navbarUser } from "../../../ts/componentsProps";
import React from "react";
import { wrappWithLink } from "../../../utils/wrappWithLink";
import { processTWClasses } from "../../../utils/twStringsProcessor";
import Image from "next/image";

interface props {
  user: navbarUser;
  classes?: string;
}

const baseClasses =
  " rounded-full hover:transform hover:transition hover:scale-105 'hover:duration-300'";

const user = (props: props) => {
  const userComponent = (
    <div className="flex rounded-full flex-col items-end">
      <a>
        <Image
          className={
            props.classes
              ? processTWClasses(baseClasses, props.classes)
              : baseClasses
          }
          src={props.user.img}
          onClick={props.user.handler}
          height={"50"}
          width={"50"}
        />
      </a>
    </div>
  );

  if (props.user.withLink && props.user.url) {
    return wrappWithLink(props.user.url, userComponent, props.user.as);
  } else {
    return userComponent;
  }
};

export default user;
