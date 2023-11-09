// import { useAuth } from "../hook/useAuthContext"
import { useEffect } from "react"
import iconline from "../assets/images/iconline.svg";
export default function LineLoginButton() {

    useEffect(() => {
        liff.init({ liffId: '2001390459-y9GRwgp7' })
    }, [])
    const handleLoginLiff = async() => {
        liff.login()
    } 
    // const { handleLoginLiff} = useAuth()

    return (               
        <div className="mobile:pl-[10px]">
         <button 
                onClick={handleLoginLiff}
              type="button"
              className="mobile:w-[350px]  py-2.5 px-5  text-sm font-medium  text-gray60 focus:outline-none bg-primaryWhite rounded-lg border border-gray20 hover:bg-gray10 hover:text-blue60 focus:z-10 focus:ring-4 focus:ring-gray20 dark:focus:ring-gray60 dark:bg-gray60 dark:text-gray40 dark:border-gray50 dark:hover:text-primaryWhite dark:hover:bg-gray60"
            >
              <div className="mobile:pr-[90px] flex justify-center items-center">
                <img
                  className="mobile:inline mr-[50px]"
                  src={iconline}
                  alt=""  
                />
                <div>Continue with Line</div>
              </div>
            </button>
            <br className="mobile" />
            <br className="mobile" />
          </div>

    )
}