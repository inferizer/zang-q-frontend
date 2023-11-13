import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <PacmanLoader size={80} color="#DD0F95" className="-ml-28"/>
    </div>
  );
}
