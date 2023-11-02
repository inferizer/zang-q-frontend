const SecondaryButton = ({ children, onClick }) => (
  <button className="bg-greenLight hover:bg-green-300 text-white font-bold py-2 px-7 rounded">
    {children}
  </button>
);

export default SecondaryButton;
