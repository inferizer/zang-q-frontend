import axios from "../config/axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

import { addAccessToken,getAccessToken,removeAccessToken } from "../utils/localStorage";


export const AuthContext = createContext()
export default function AuthContextProvider({children}){
    
    const [initLoading,setInitLoading] = useState(true)
    const [authUser,setAuthUser] = useState(null)
    const [input,SetInput] = useState({})
    useEffect(()=>{
        const token = getAccessToken()
        
        if(token){

            axios.get('/auth').then(res => {
    
                setAuthUser(res.data.user)


            }).catch(console.log).finally(() => {

                setInitLoading(false)
            })
        }

        else setInitLoading(false)
    }
        , [])


    const hdl_user_register_submit=  async () =>{
            await axios.post('/auth/register',input).then(res=>{
                addAccessToken(res.data.accessToken)
                setAuthUser(res.data.user)
                SetInput({})
            }).catch(error =>{
                throw error
            })
        }


    const hdl_user_login_submit = () =>{
        axios.post('/auth/login',input).then(res=>{
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }
        ).catch( error =>{

            console.log(error.response.data.message)
        })
    }
    const hdl_vendor_login_submit =  () =>{
     axios.post('/vendor/login',input).then( res =>{
            setAuthUser(res.data.user)
            addAccessToken(res.data.accessToken)
            SetInput({})

     })
    }


    const hdl_vendor_register_submit = async() =>{
        await axios.post('/vendor/register',input).then(res=>{

            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }
        ).catch(error => {
            console.log(error.response.data.message)
            throw error
        })


    }
    const hdl_input = (e) => {
        SetInput({ ...input, [e.target.name]: e.target.value })
    }



    const hdl_logout = () =>{
            removeAccessToken()
            setAuthUser(null)

    }
    return(<AuthContext.Provider value={{hdl_user_register_submit,
        hdl_user_login_submit,
    hdl_vendor_register_submit,
    initLoading,
    setInitLoading,
    hdl_input,
    input,
    authUser,
    hdl_logout,
    hdl_vendor_register_submit,
    hdl_vendor_login_submit}}>

        {children}
    </AuthContext.Provider>)
}