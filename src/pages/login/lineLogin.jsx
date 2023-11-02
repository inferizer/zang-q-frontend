import liff from "@line/liff"
import React from "react"
import { useEffect,useState } from "react"
import Loading from "../../component/loading"
import axios from "../../config/axios"
import { addAccessToken } from "../../utils/localStorage"


export default function LinePage() {
    const [isloading,setisLoading] = useState(true)
    
    useEffect(() => {
        handleLogin()
        setisLoading(false)
    }
        , [])
    // const handleLogin = () => liff.init({ liffId: '2001390459-y9GRwgp7' })
    //     .then( () => {
    //         if (liff?.isLoggedIn()) {
    //            liff.ready.then(()=> {
    //             liff.getProfile().then(res=>{
    //                 console.log(res)
    //                 // setLineProfile(res)
    //                 // senddata()
    //                 axios.post('/auth/loginLine',res)
    //                 .then((res)=> {
    //                     console.log(res.data)
    //                     addAccessToken(res.data.accessToken)
    //                 })
    //             });

    //            })
    //         } else {
    //             liff.login();
                
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    const handleLogin = () => liff.init({ liffId: '2001390459-y9GRwgp7' }, () => {
        if (liff.isLoggedIn()) {
           liff.ready.then(()=> {
            liff.getProfile().then(res=>{
                console.log(res)
                // setLineProfile(res)
                // senddata()
                axios.post('/auth/loginLine',res)
                .then((res)=> {
                    console.log(res.data)
                    addAccessToken(res.data.accessToken)
                })
            });

           })
        } else {
            liff.login();
            
        }
    })
    .catch((err) => {
        console.log(err);
    })


    const handlelogout = () => liff.logout()
        
    return (
        
        <div>
            {isloading ? <Loading/> : <div>Login Success
            <button onClick={handlelogout}>logout </button>
            </div>
            }
           
        </div>
    
    )
}