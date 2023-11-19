import { CheckedIcon } from "../../assets/icon/Icon";
export default function AcceptButton({ id, onClick, className }) {
  return (
    <>
      <button onClick={onClick} className={className} id={id}>
        <CheckedIcon id={id} />
      </button>
    </>
  );
}
