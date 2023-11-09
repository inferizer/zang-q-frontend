export default function Input({type = "text",placeholder,name,onChange,id,error,value}){
    return <input key={id}type={type} placeholder={placeholder} name={name} onChange={onChange} 
    value={value}
    className={`mobile:w-[350px] p-[10px] g-[10px] rounded-md
    ${error
        ? "border-red-500 focus:ring-red-300"
        : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        }`} 
    />
}