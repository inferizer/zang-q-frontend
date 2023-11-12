import { useAuth } from "../../hook/useAuthContext";
import {getAccessToken} from "../../utils/localStorage"
import {ADMIN,USER,VENDOR} from "../../constant/role"
import UserDetail from "../user/userDetail"
export default function UserDetailModal() {
  if(getAccessToken()){
      const { authUser:{role},authUser} = useAuth();
      
      
      return (
          <div className="w-screen h-screen desktop:h-[100v] bg-gray-50 px-4'>">
      <div className="className='max-w-[800px] m-auto desktop:max-w-[1024px]">
        
       {role == ADMIN &&
            <UserDetail  name={authUser.username} />
        }
       {role == USER &&
            <UserDetail name={authUser.username}/>
        }
       {role == VENDOR &&
            <UserDetail />
        }
      </div>
    </div>
  );
}
}
