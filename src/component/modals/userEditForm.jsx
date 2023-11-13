import { useAuth } from "../../hook/useAuthContext";
export default function UserEditForm({setEditFormOpen}) {

    const {authUser:{id},hdl_user_edit} = useAuth()

  
    return (
    <div className="w-[50vw] h-screen desktop:h-[100v] bg-gray-50 px-4 z-20">
      <div className="className='max-w-[800px] m-auto desktop:max-w-[1024px] pt-20 bg-red-200 z-30 ">
        
        
        <button onClick={()=>hdl_user_edit(id)}>submit</button>
        <button  onClick={()=>setEditFormOpen(false)}>cancel</button>
      </div>
    </div>
  );
}
