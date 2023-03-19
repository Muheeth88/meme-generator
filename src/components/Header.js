import React from "react";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex justify-between bg-purple-600 py-4 text-white">
      <span className="mx-4 text-3xl font-bold">
        <FontAwesomeIcon
          className="mr-4 text-4xl font-extrabold"
          icon={faFaceAngry}
        />
        Meme Generator
      </span>
      <span className="mx-4 text-base mt-auto">- made with React</span>
    </header>
  );
};

export default Header;
