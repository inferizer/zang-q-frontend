export default function AddQueueButton ({onClick,text}) {
    return (
        <button 
        className=" px-4 py-1 border rounded-3xl border-white text-white bg-pink-400"
        onClick={onClick}
        >{text}</button>
    )
}