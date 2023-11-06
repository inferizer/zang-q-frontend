import React, { useEffect } from 'react'
import { addAccessToken } from '../../utils/localStorage';
import { useAuth } from "../../hook/useAuthContext"
import { useNavigate } from 'react-router-dom';
export default function CallbackPage() {
  const navigate = useNavigate()
  const { setAuthUser } = useAuth()
  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search)
    for (let i of urlParams) {
      console.log(i)
    }
    addAccessToken(urlParams.get('token'))
    const role = (urlParams.get('role').trim())
    const lineId = (urlParams.get('lineId').trim())
    setAuthUser({ role, lineId })
    navigate('/')
    // if(role !== 'user') {  
    // window.location.replace('/')
    //   } 

  }, [])
  return (
    <div>CallbackPage</div>
  )
}
