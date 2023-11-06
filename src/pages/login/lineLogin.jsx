import liff from "@line/liff"
import React from "react"
import { useEffect, useState } from "react"
import Loading from "../../component/loading"
import axios from "../../config/axios"
import { getLineToken } from '../../utils/localStorage'
import { useNavigate } from "react-router-dom"

export default function LinePage() {
    const navigate = useNavigate()
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        if (getLineToken()) {
            handlelogout()
            navigate('/')
        }
        handleLogin()

    }
        , [])

    const handleLogin = () => liff.init({ liffId: '2001390459-y9GRwgp7' }, () => {
        if (liff.isLoggedIn()) {
            liff.ready.then(() => {
                liff.getProfile().then(res => {
                    axios.post('/auth/loginLine', res)
                        .then(res => {
                            console.log(res.data.user)
                            const token = encodeURIComponent(res.data.accessToken)
                            window.location.replace(`http://localhost:5173/line-callback?token=${token}
                            &username=${res.data.user.username}&banCount=${res.data.user.id}&username=${res.data.user.banCount}
                            &email=${res.data.user.email}&facebookId=${res.data.user.facebookId}&googoldId=${res.data.user.googleId}
                            &isActive=${res.data.user.isActive}&lineId=${res.data.user.lineId}&role=${res.data.user.role}
                            &location=${res.data.user.location}&mobile=${res.data.user.mobile}&password=${res.data.user.password}`)
                            setisLoading(false)
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

    const handlelogout = () => liff.init({ liffId: '2001390459-y9GRwgp7' }).then(() => {
        liff.logout()
    })
    return (
        <div>
            {isloading ? <Loading /> : <div>

            </div>
            }
        </div>

    )
}