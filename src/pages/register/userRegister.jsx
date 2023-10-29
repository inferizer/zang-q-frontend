
import Input from '../../component/input'
import { useAuth } from '../../hook/useAuthContext';
export default function UserRegister() {

    const { hdl_input,input,hdl_user_register_submit} = useAuth()

    const inputTag = [
        { id:1,name: "username" },
        { id:2,name: "password" },
        { id:3,name: "confirmPassword" },
        { id:4,name: "emailOrMobile" },
        
    ]

    return (
        <>
            <form key="1"className=' flex flex-col' onSubmit={(e) => {
                e.preventDefault()
                hdl_user_register_submit(input)
            }}>

                {inputTag.map((el) => {
                    return (
                        <>
                            <label>{el.name}</label>
                            <Input key={el.id} name={el.name} type='text' placeholder="enter here" onChange={hdl_input} />
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