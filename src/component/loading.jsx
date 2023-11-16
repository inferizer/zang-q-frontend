import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading({className}) {
  return (
    <div className={`w-screen h-screen flex justify-center items-center ${className}`}>
      <PacmanLoader size={80} color="#DD0F95" className="-ml-28"/>
    </div>
  );
}
