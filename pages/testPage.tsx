import type { NextPage } from "next";
import Navbar from "../src/components/navbar/navbar";
import { linkData } from "../src/ts/componentsProps";
import useModal from "../src/hooks/useModal";

const bell = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 hover:transform hover:transition hover:scale-105 cursor-pointer "
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const TestPage: NextPage = () => {
  const [isOpen, toggleModal, myComponent] = useModal();
  const modal = myComponent(<p>MODAL</p>, " ");

  const testLinks: linkData[] = [
    { url: "/", text: "Home" },
    { url: "/testPage", text: "TestPage" },
    { withIcon: true, icon: bell, handler: toggleModal },
  ];
  return (
    <main className="w-full h-screen flex flex-col items-center space-y-8" >
      <Navbar
        classes="absolute fixed top-0"
        withLogo
        logo="/matthew-henry-U5rMrSI7Pn4-unsplash.jpg"
        withLinks
        links={testLinks}
        withUser
      />
      {modal}
    </main>
  );
};

export default TestPage;
