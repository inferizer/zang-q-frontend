
import {useAuth} from "../../hook/useAuthContext"
import {useNavigate} from "react-router-dom"
import Input from "../../component/input"
export default function VendorRegistor(){
    
    const {hdl_vendor_register_submit,hdl_input,} = useAuth()
    const navigate = useNavigate()


    const inputTag = [
        { name: "email" },
        { name: "password" },
        { name: "confirmPassword" }
    ]

    const hdl_submit =  async (e) =>{
        e.preventDefault()
        await hdl_vendor_register_submit().then( ()=>{
            navigate('/')
        }).catch(err=>{
            alert(err.response.data.message)
        })
    

    }

    return (
        <>
            <form className=' flex flex-col' onSubmit={hdl_submit}>

                {inputTag.map((el, id) => {
                    return (
                        <>
                            <label>{el.name}</label>
                            <Input id={id} name={el.name} type='text' placeholder="enter here" onChange={hdl_input} />
                        </>
                    )
                }
                )

                }
                <button>submit</button>
            </form>
        </>
    )
}