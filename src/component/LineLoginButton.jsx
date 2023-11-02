// import { useAuth } from "../hook/useAuthContext"
import { useEffect } from "react"
export default function LineLoginButton() {

    useEffect(() => {
        liff.init({ liffId: '2001390459-y9GRwgp7' })
    }, [])
    const handleLoginLiff = async() => {
        liff.login()
    }
    // const { handleLoginLiff} = useAuth()

    return (
        <button onClick={handleLoginLiff}
            className=" bg-green-600" >
            Line Login</button>
    )
}