const ACCESS_TOKEN = "ACCESS_TOKEN"
export const addAccessToken = token => localStorage.setItem(ACCESS_TOKEN,token)
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN)
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)


// const LIFF_STORE = "LIFE_STORE"
// export const getLineToken  = () => localStorage.getItem(LIFF_STORE)
