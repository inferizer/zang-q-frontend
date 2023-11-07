import { useAuth } from "../../hook/useAuthContext";
import { GoogleLogin } from "react-google-login"

// import Input from "../../component/input";

import LineLoginButton from "../../component/LineLoginButton";
import liff from '@line/liff'
export default function UserLogin() {

    const { hdl_input, input, hdl_user_login_submit, SuccessGoogle, failGoogle } = useAuth()

    liff.init({ liffId: '2001390459-y9GRwgp7' })
    const clientId = "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com"

    // const inputTag = [
    //     { id: 4, name: "emailOrMobile" },
    //     { id: 2, name: "password" },
    // ]
    return (
        <>
            <form key="1" className=' flex flex-col mb-10' onSubmit={(e) => {
                e.preventDefault()
                hdl_user_login_submit(input)
            }}>

                <div className="mobile">
                    <header className="mobile">
                        <div className="mobile:justify-center items-center h-screen flex">
                            <form className="mobile" onSubmit={hdl_user_login_submit}>
                                <h1 className="mobile:mb-[25px]">
                                    <b className="mobile:text-[25px]">Login</b>
                                </h1>
                                <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start">
                                    <label className="mobile" htmlFor="emailOrMobile">
                                        Email or Mobile
                                    </label>
                                    <input
                                        onChange={hdl_input}
                                        className={`mobile: w-[367px] mobile:border-solid mobile:border-2 mb-2 border-[#BDBDBD]`}
                                        placeholder="Email or Mobile:"
                                        type="text"
                                        id="emailOrMobile"
                                        name="emailOrMobile"
                                    />
                                </div>
                                <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start ">
                                    <label className="mobile" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        onChange={hdl_input}
                                        className={`mobile:w-[367px] mobile:border-solid mobile:border-2 mb-2 border-[#BDBDBD]`}
                                        type="password"
                                        placeholder="password:"
                                        name="password"
                                        required
                                    />
                                    {/* mobile:mt-[25px] w-[350px] flex justify-center items-center */}
                                </div>
                                <button
                                    onClick={hdl_user_login_submit}
                                    type="button"
                                    className="mobile:mt-[25px] ml-[9px] w-[350px] flex justify-center 
                items-center focus:outline-none text-white bg-[#56CA76] hover:bg-primaryRed
                 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                                >
                                    Continue
                                </button>
                                <div className="mobile:inline-flex items-center justify-center w-full">
                                    <hr className="mobile:w-64 h-px my-8 bg-gray30 border-0 dark:bg-gray60" />
                                    <span className="mobile:absolute px-3 font-medium text-gray60 -translate-x-1/2 bg-white left-1/2 dark:text-primaryWhite dark:bg-gray50">
                                        or
                                    </span>
                                </div>

                                <div>
                                    <LineLoginButton />
                                </div>

                                <div className="mobile:pl-[10px]">
                                    <button
                                        type="button"
                                        className="mobile:w-[350px]  py-2.5 px-5  text-sm 
                                        font-medium text-gray60 focus:outline-none bg-primaryWhite rounded-lg border border-gray20 hover:bg-gray10 hover:text-blueSum focus:z-10 focus:ring-4 focus:ring-gray20 dark:focus:ring-gray50 dark:bg-gray60 dark:text-gray40 dark:border-gray60 dark:hover:text-primaryWhite dark:hover:bg-gray60"
                                    >
                                        <div className="mobile:pr-[73px] flex justify-center items-center">
                                            {/* <img
                      className="mobile:inline w-[45px] h-[45px] mr-[50px]"
                    //   src={icongoogle}
                      alt=""
                    />
                    <div>Continue with Google </div> */}
                                            <GoogleLogin
                                                clientId={clientId}
                                                buttonText="sign in with google"
                                                onSuccess={SuccessGoogle}
                                                onFailure={failGoogle}
                                                cookiePolicy="single_host_origin"
                                                isSignedIn={false}
                                            />
                                        </div>
                                    </button>
                                    <br className="mobile" />
                                    <br cassName="mobile" />
                                </div>
                                <div className="mobile:text-center">
                                    <span className="mobile">Don't have an account?</span>
                                    <span className="mobile:ml-4">
                                        <u className="mobile">Sign up</u>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </header>
                </div>
            </form>
        </>
    )
}

