import axios from "../config/axios";
import { useEffect,useState } from "react";
import { createContext } from "react";
import { addAccessToken,getAccessToken } from "../utils/localStorage";


export const AuthContext = createContext()
export default function AuthContextProvider({children}){
    
    const [initLoading,setInitLoading] = useState(true)
    const [authUser,setAuthUser] = useState(null)
    const [input,SetInput] = useState({})
    
    
    
    useEffect(()=>{
        const token = getAccessToken()
        if(token){
            axios.get('/auth').then(res => {
                console.log(res.data.user)
                setAuthUser(res.data.user)
            
            }).catch(console.log).finally( ()=>{
                setInitLoading(false)
            })
        }

        else setInitLoading(false)
        } 
        ,[])


    const hdl_user_register_submit= (input) =>{
        axios.post('/auth/register',input).then(res=>{
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }).catch(error =>{
            console.log(error.response.data.message)
        })
    }


    const hdl_user_login_submit = (input) =>{
        axios.post('/auth/login',input).then(res=>{
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user)
            SetInput({})
        }
        ).catch( error =>{
            console.log(error.response.data.message)
        })
    }

    const hdl_vendor_register_submit =(input) =>{

    }
    const hdl_input = (e) =>{
        SetInput({...input, [e.target.name]:e.target.value})
    }
    return(<AuthContext.Provider value={{hdl_user_register_submit,
        hdl_user_login_submit,
    hdl_vendor_register_submit,
    initLoading,
    setInitLoading,
    hdl_input,
    input,
    authUser}}>
        {children}
    </AuthContext.Provider>)
}