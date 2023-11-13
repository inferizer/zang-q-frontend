import { CheckedIcon} from "../../assets/icon/Icon";
export default function AcceptButton({onClick}) {
    
    return (
        <>
            <button onClick={onClick}><CheckedIcon/></button>
        </>
    )
}