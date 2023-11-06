import React from "react";
const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-primaryBlack hover:bg-gray60 text-white font-semibold py-4 px-6 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
