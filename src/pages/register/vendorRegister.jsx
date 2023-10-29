export default function VendorRegistor(){
    const { hdl_input,input} = useValidation();
    const {hdl_user_register_submit} = UseAuth()


    const inputTag = [
        { name: "username" },
        { name: "password" },
        { name: "confirmPassword" },
        { name: "emailOrMobile" },
        { name: "location" },
    ]

    return (
        <>
            <form className=' flex flex-col' onSubmit={(e) => {
                e.preventDefault()
                hdl_user_register_submit(input)
            }}>

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
                <select name='role' onChange={hdl_input}>
                    <option value={"user"}>user</option>
                    <option value={"shop_admin"}>Shop admin</option>
                    <option value={"shop_super_admin"}>shop super admin</option>
                    <option value={"super_admin"}>super admin</option>
                </select>
                <button>submit</button>
            </form>
        </>
    )
}