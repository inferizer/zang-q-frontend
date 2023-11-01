import { useAuth } from "../hook/useAuthContext"

export default function LineLoginButton() {
    
    const {handleLogin} = useAuth()
    return (
        <button onClick={handleLogin} className=" bg-green-600" >Line Login</button>
    )
}