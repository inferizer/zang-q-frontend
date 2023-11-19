export default function Modal({ children, onClose }) {
  return (
    <div>
      <button
        className=" bg-primary-100 p-3 text-white font-bold rounded-full mt-16"
        onClick={onClose}
      >
        close
      </button>
      {children}
    </div>
  );
}
