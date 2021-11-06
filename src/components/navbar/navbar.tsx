import { ReactNode } from "react";
import { processTWClasses } from "../../utils/twStringsProcessor";
import Logo from "./navSections/logo";
import LinkGroup from "./navSections/linkGroup";
import User from "./navSections/user";
import { linkData, navbarUser } from "../../ts/componentsProps";

interface props {
  children?: ReactNode;
  classes?: string;
  withLinks?: boolean;
  linkDark?: boolean;
  links?: linkData[];
  linkClasses?: string;
  linkColor?: string;
  linkContainerClasses?: string;
  withLogo?: boolean;
  logo?: string;
  logoUrl?: string;
  logoAs?: string;
  logoClasses?: string;
  logoAlt?: string;
  withUser?: boolean;
  user?: navbarUser;
  userClasses?: string;
}

const baseUser : navbarUser = {
    img: '/matthew-henry-U5rMrSI7Pn4-unsplash.jpg',
}

const baseClasses =
  "h-20 w-full flex flex-row justify-between px-4 py-4 filter shadow backdrop-filter backdrop-blur-sm z-50 ";

const Navbar = (props: props) => {
  let withLogo = null;
  let withLinks = null;
  let withUser = null;

  if (props.withLogo) {
    withLogo = (
      <Logo
        url={props.logoUrl ? props.logoUrl : "/"}
        as={props.logoAs ? props.logoAs : props.logoUrl ? props.logoUrl : "/"}
        img={
          props.logo ? props.logo : "/matthew-henry-U5rMrSI7Pn4-unsplash.jpg"
        }
        classes={props.logoClasses ? props.logoClasses : ""}
      />
    );
  }

  if (props.withLinks) {
    withLinks = (
      <LinkGroup
        links={props.links ? props.links : [{ url: "/", text: "home" }]}
        classes={props.linkClasses ? props.linkClasses : " "}
        linkColor={props.linkColor}
        containerClasses={
          props.linkContainerClasses ? props.linkContainerClasses : " "
        }
      />
    );
  }

  if (props.withUser) {
    withUser = <User user={props.user ? props.user : baseUser } />;
  }

  return (
    <div
      className={
        props.classes
          ? processTWClasses(baseClasses, props.classes)
          : baseClasses
      }
    >
      {withLogo}
      <div className='flex flex-row lg:w-2/5 xl:w-2/5 justify-around ' >
        {withLinks}
        {props.children}
        {withUser}
      </div>
    </div>
  );
};

export default Navbar;
