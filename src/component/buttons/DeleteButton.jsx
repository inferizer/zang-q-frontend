import { RiDeleteBin5Fill } from "react-icons/ri";
export default function DeleteButton({onClick}) {
    return (
        <>
            <button onClick={onClick}><RiDeleteBin5Fill/></button>
        </>
    )
}