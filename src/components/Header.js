import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between bg-purple-600 py-4 text-white">
      <span className="mx-4 text-3xl font-bold">Meme Generator</span>
      <span className="mx-4 text-base mt-auto">-made with React</span>
    </header>
  );
};

export default Header;
