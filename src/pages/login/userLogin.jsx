import { useAuth } from "../../hook/useAuthContext";
import { GoogleLogin } from "react-google-login"
import Input from "../../component/input";

import LineLoginButton from "../../component/LineLoginButton";
import liff from '@line/liff'
import icongoogle from '../../assets/images/icongoogle.svg'
import Joi from "joi";
import { useState } from "react";
import InputErrorMessage from '../../pages/register/InputErrorMessage'
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
    const UserLoginSchema = Joi.object({
        emailOrMobile: Joi.alternatives([
            Joi.string().email({ tlds: false }),
            Joi.string().pattern(/^[0-9]{10}$/),
        ])
            .required()
            .strip(),
        password: Joi.string().required(),
        mobile: Joi.forbidden().when("emailOrMobile", {
            is: Joi.string().pattern(/^[0-9]{10}$/),
            then: Joi.string().default(Joi.ref("emailOrMobile")),
        }),
        email: Joi.forbidden().when("emailOrMobile", {
            is: Joi.string().email({ tlds: false }),
            then: Joi.string().default(Joi.ref("emailOrMobile")),
        }),
    });
    const { hdl_input, input, hdl_user_login_submit, SuccessGoogle, failGoogle } = useAuth()
    const [error, setError] = useState({})
    const navaigate = useNavigate()

    const validateLogin = (input) => {
        const { error } = UserLoginSchema.validate(input, { abortEarly: false });
        console.log(error);
        if (error) {
            const result = error.details.reduce((acc, el) => {
                const { message, path } = el;
                acc[path[0]] = message;
                return acc;
            }, {});
            return result;
        }
    };
    liff.init({ liffId: '2001390459-y9GRwgp7' })
    const clientId = "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com"
    

    const hdl_login_submit = async () => {
        e.preventDefault();
        const validationError = validateLogin(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({})
        await hdl_user_login_submit()
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
                <div className="mobile:">
                    <header className='mobile:'>
                        <div className="mobile:justify-center items-center h-screen flex">
                            <form className="mobile" onSubmit={hdl_login_submit}>
                                <h1 className="mobile:mb-[25px]">
                                    <b className="mobile:text-[25px]">Login</b>
                                </h1>
                                <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start">
                                    <label className="mobile" htmlFor="emailOrMobile">
                                        Email or Mobile
                                    </label>
                                    <Input
                                        onChange={hdl_input}
                                        className={`mobile:w-[367px] mobile:border-solid mobile:border-2 mb-2 border-[#BDBDBD]`}
                                        placeholder="Email or Mobile:"
                                        type="text"
                                        id="emailOrMobile"
                                        name="emailOrMobile"
                                        error={error.emailOrMobile}
                                    />
                                     {error.emailOrMobile && (<InputErrorMessage message={error.emailOrMobile} />)}
                                </div>
                                <div className="mobile:border-[#BDBDBD] flex flex-col gap-2 items-start ">
                                    <label className="mobile" htmlFor="password">
                                        Password
                                    </label>
                                    <Input
                                        onChange={hdl_input}
                                        className={`mobile:w-[367px] mobile:border-solid mobile:border-2 mb-2 border-[#BDBDBD]`}
                                        type="password"
                                        placeholder="password:"
                                        name="password"
                                        required
                                        error={error.password}
                                    />
                                     {error.password && (<InputErrorMessage message={error.password} />)}
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

                                <div className="mobile: pl-[10px]" >
                                    <div>
                                        <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Continue with Google"
                                            onSuccess={SuccessGoogle}
                                            onFailure={failGoogle}
                                            cookiePolicy="single_host_origin"
                                            isSignedIn={false}
                                            type="button"
                                            render={renderProps => (
                                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                                                    className="mobile: w-[350px]  py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                    <div className="mobile: pr-[73px]">
                                                        <img
                                                            className="mobile: inline w-[45px] h-[45px] mr-[50px]"
                                                            src={icongoogle}
                                                            alt=""
                                                       
                                                        />
                                                        Continue with Google
                                                    </div></button>
                                            )}
                                        />
                                    </div>

                                    <br className="mobile" />
                                    <br className="mobile" />
                                </div>
                                <div className="mobile:text-center">
                                    <span className="mobile">Don't have an account?</span>
                                    <span className="mobile:ml-4">
                              
                                       <button className="mobile" onClick={() => {navaigate('/register/user')}}>Sign up</button> 
                                 
                                    </span>
                                </div>
                            </form>
                        </div>
                    </header>
                </div>

        </>
    )
}

