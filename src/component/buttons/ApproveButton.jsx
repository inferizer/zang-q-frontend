import { RiCheckboxCircleFill} from "react-icons/ri";
export default function ApprovedButton({onClick}) {
    
    return (
        <>
            <button onClick={onClick}><RiCheckboxCircleFill/></button>
        </>
    )
}