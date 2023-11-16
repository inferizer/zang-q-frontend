// import { useAuth } from "../hook/useAuthContext"
import { useEffect } from "react";
import iconline from "../assets/images/iconline.svg";
export default function LineLoginButton() {
  useEffect(() => {
    liff.init({ liffId: "2001390459-y9GRwgp7" });
  }, []);
  const handleLoginLiff = async () => {
    liff.login();
  };
  // const { handleLoginLiff} = useAuth()

  return (

    <button
      onClick={handleLoginLiff}
      type='button'
      className="flex justify-center items-center gap-4 py-2 px-6 text-sm font-medium text-gray-900 rounded border-2 border-gray-200 hover:text-primary-500 hover:border-primary-500 focus:outline-none focus:bg-gray-100"
      >
      <img className='w-10 h-10' src={iconline} alt='' />
      Continue with Line
    </button>

  );
}
