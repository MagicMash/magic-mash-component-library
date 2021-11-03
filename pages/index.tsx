import type { NextPage } from "next";
import Button from "../src/components/button/button";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center pt-24 space-y-8">
      <h1 className=" text-darkBlue ">
        {" "}
        Magic Mash ui-library is on the way mf!!{" "}
      </h1>
      <p className="text-darkGreen"> omae mo ... </p>
      <p className="text-danger "> MUDAMUDAMUDA ... ! </p>
    </main>
  );
};

export default Home;
