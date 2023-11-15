export default function DatePickerButton({ onClick }) {
    return (
        <button
        className="mobile:w-[358px] h-[60px] px-4 py-3.5  border border-white
        flex-col justify-start items-center gap-2.5 inline-fle bg-gray-200"
        onClick={onClick}
        >
            <div className=" flex flex-col ">
                Date
            </div>
            <div>
                <div>s</div>
            </div>
        </button>
    )
}