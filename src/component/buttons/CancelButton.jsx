import { CancelIcon } from "../../assets/icon/Icon";
export default function CancelButton({ onClick, id }) {
  return (
    <>
      <button id={id} onClick={onClick}>
        <CancelIcon id={id} />
      </button>
    </>
  );
}
