import { CancelIcon } from "../../assets/icon/Icon";
export default function CancelButton({onClick}) {

    return (
        <>
            <button onClick={onClick}
            ><CancelIcon/></button>
        </>
    )
}