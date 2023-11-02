import React, { useEffect } from 'react'
import { addAccessToken } from '../../utils/localStorage';

export default function CallbackPage() {
    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        addAccessToken(urlParams.get('token'))
        window.location.replace('/')
    }, [])
  return (
    <div>CallbackPage</div>
  )
}
