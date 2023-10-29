export default function Input({type = "text",placeholder,name,onChange,id}){
    return <input key={id}type={type} placeholder={placeholder} name={name} onChange={onChange} />
}