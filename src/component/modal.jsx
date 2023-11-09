export default function Modal({children,onClose}){
    return<div>
    
    <button className=" bg-red-200 p-2 rounded-full" onClick={onClose}>close</button>
    {children}
    </div> 
}