export default function Input({type = "text",placeholder,name,onChange,id,error}){
    return <input key={id}type={type} placeholder={placeholder} name={name} onChange={onChange} 
    className={`mobile:w-[367px] mobile:border-solid border-2 mb-2 border-[#BDBDBD]${error
        ? "border-red50 focus:ring-red30"
        : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        }`} 
    />
}