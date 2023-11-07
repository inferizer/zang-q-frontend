const SecondaryButton = ({ children, onClick }) => {
  return (
    <button className="bg-greenLight hover:bg-gray10 text-white font-bold py-2 px-7 rounded">
      {children}
    </button>
  );
};

export default SecondaryButton;
