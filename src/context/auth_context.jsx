import axios from "../config/axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { addAccessToken, getAccessToken } from "../utils/localStorage";
import liff from '@line/liff'


export const AuthContext = createContext()
export default function AuthContextProvider({ children }) {

    const [initLoading, setInitLoading] = useState(true)
    const [authUser, setAuthUser] = useState(null)
    const [input, SetInput] = useState({})


    // line 
    // useEffect(() => {
    //     liff.init({ liffId:'2001390459-y9GRwgp7'})
    //     .then(async()=>  {
    //         const profile  = await liff.getProfile()
    //         loginLine(profile)
    //     })
    //     },[])
    //     const loginLine = async (input) => {

    //             await axios.post('/auth/loginLine', input);
    //     }
  
        const handleLogin = async () => {
            try {      
                liff.login()
            } catch (err) {
                console.log(err)
            }
        }


    useEffect(() => {
        const token = getAccessToken()
        if (token) {
            axios.get('/auth').then(res => {
                console.log(res.data.user)
                setAuthUser(res.data.user)

            }).catch(console.log).finally(() => {
                setInitLoading(false)
            })
        }

        else setInitLoading(false)
    }
        , [])


    const hdl_user_register_submit = (input) => {
        axios.post('/auth/register', input).then(res => {
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }


    const hdl_user_login_submit = (input) => {
        axios.post('/auth/login', input).then(res => {
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }
        ).catch(error => {
            console.log(error.response.data.message)
        })
    }

    const hdl_vendor_register_submit = (input) => {

    }
    const hdl_input = (e) => {
        SetInput({ ...input, [e.target.name]: e.target.value })
    }
    
    

    return (<AuthContext.Provider value={{
        hdl_user_register_submit,
        hdl_user_login_submit,
        hdl_vendor_register_submit,
        initLoading,
        setInitLoading,
        hdl_input,
        input,
        handleLogin,
        authUser
    }}>
        {children}
    </AuthContext.Provider>)
}