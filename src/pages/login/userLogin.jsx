import { useAuth } from "../../hook/useAuthContext";
import {GoogleLogin} from "react-google-login"

import Input from "../../component/input";

import LineLoginButton from "../../component/LineLoginButton";
import liff from '@line/liff'
<<<<<<< HEAD

export default function UserLogin() {
    const { hdl_input, input, hdl_user_login_submit } = useAuth()

    liff.init({ liffId: '2001390459-y9GRwgp7' })

=======
import { useEffect } from "react";
export default function UserLogin(){
    
  const {hdl_input,input,hdl_user_login_submit,SuccessGoogle,failGoogle} = useAuth()

    liff.init({ liffId:'2001390459-y9GRwgp7'})
     const clientId = "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com"
 
>>>>>>> 1dffeed4e58c54950ca8b38841ad8fa56cf0d57d
    const inputTag = [
        { id: 4, name: "emailOrMobile" },
        { id: 2, name: "password" },
    ]
    return (
        <>
            <form key="1" className=' flex flex-col' onSubmit={(e) => {
                e.preventDefault()
                hdl_user_login_submit(input)
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

<<<<<<< HEAD
                <button>login</button>


            </form>
            <LineLoginButton />
=======
      
<GoogleLogin 
clientId={clientId}
buttonText="sign in with google"
onSuccess={SuccessGoogle}
onFailure={failGoogle}
cookiePolicy="single_host_origin"
isSignedIn={false}

/>

      </form>  
                <LineLoginButton/>
>>>>>>> 1dffeed4e58c54950ca8b38841ad8fa56cf0d57d
        </>



    )
}
<<<<<<< HEAD
=======

>>>>>>> 1dffeed4e58c54950ca8b38841ad8fa56cf0d57d
