import { useNavigate } from "react-router-dom"
export default function VendorLanding(){
    const navigate =  useNavigate()
    return <div  className=" hover:cursor-pointer" onClick={() =>{
      navigate('/vendor/application')  
    }}>proceed to application</div>
}