import type { NextPage } from "next";
import { linkData } from "../src/ts/componentsProps";
import Button from "../src/components/button/button";
import useModal from "../src/hooks/useModal";
import Navbar from "../src/components/navbar/navbar";

const testLinks : linkData[] = [{url: '/', text: 'Home' }, {url: '/test', text: 'TestPage'}]


const Home: NextPage = () => {
  const [isOpen, toggleModal, myComponent] = useModal();
  const modal = myComponent(<p>MODAL</p>, " ");

  return (
    <main className="w-full h-screen flex flex-col items-center pt-24 space-y-8">
      <Navbar withLogo logo='/matthew-henry-U5rMrSI7Pn4-unsplash.jpg' withLinks links={testLinks} withUser />
      <h1 className=" text-darkBlue ">
        {" "}
        Magic Mash ui-library is on the way mf!!{" "}
      </h1>
      <p className="text-darkGreen"> omae mo ... </p>
      <p className="text-danger "> MUDAMUDAMUDA ... ! </p>
      <Button text="Toggle Modal" onClick={toggleModal} />
      {modal}
    </main>
  );
};

export default Home;
