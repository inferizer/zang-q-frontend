import { useAuth } from "../hook/useAuthContext";
import { getAccessToken } from "../utils/localStorage";
export default function Header() {
  const { authUser, hdl_logout } = useAuth();

  console.log(authUser);
  if (getAccessToken()) {
    if (authUser?.role == "vendor") {
      return (
        <div
          className=' mobile:bg-primaryRed desktop:bg-greenLight mobile:w-[1rem] desktop:w-full mobile:flex mobile:justify-between 
                             desktop:flex desktop:flex-col '
        >
          <h1> vendor app bar</h1>
          <button
            onClick={() => {
              hdl_logout();
            }}
          >
            log out
          </button>
        </div>
      );
    }

    if (authUser?.role == "admin") {
      return (
        <div
          className=' mobile:bg-red20 desktop:bg-green20 mobile:w-[1rem] desktop:w-full mobile:flex mobile:justify-between 
                                 desktop:flex desktop:flex-col '
        >
          <h1> admin app bar</h1>
          <button
            onClick={() => {
              hdl_logout();
            }}
          >
            log out
          </button>
        </div>
      );
    }
    return (
      <div
        className=' mobile:bg-red20 desktop:bg-green20 mobile:w-[1rem] desktop:w-full mobile:flex mobile:justify-between 
                             desktop:flex desktop:flex-col '
      >
        <h1> user app bar</h1>
        <button
          onClick={() => {
            hdl_logout();
          }}
        >
          log out
        </button>
      </div>
    );
  }
  return <h1>no app bar</h1>;
}
