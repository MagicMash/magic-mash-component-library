import type { NextPage } from "next";
import Button from "../src/components/button/button";
import useModal from "../src/hooks/useModal";
import Image from "next/image";

const Home: NextPage = () => {

  const [isOpen, toggleModal, myComponent] = useModal()
  const modal = myComponent(<p>MODAL</p>, ' ')

  return (
    <main className="w-full h-screen flex flex-col items-center pt-24 space-y-8">
      <h1 className=" text-darkBlue ">
        {" "}
        Magic Mash ui-library is on the way mf!!{" "}
      </h1>
      <p className="text-darkGreen"> omae mo ... </p>
      <p className="text-danger "> MUDAMUDAMUDA ... ! </p>
      <Button text='Toggle Modal' onClick={toggleModal} />
      {modal}
    </main>
  );
};

export default Home;
