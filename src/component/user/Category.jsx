
import { useUser } from "../../hook/useUser"
export default function Category({name,setFilter,id,hdl_filter_search,setSearchBarResult}){
  const {filter} = useUser()
    
    return ( <div className={`mobile:px-2.5 py-0.5 rounded-2xl border border-pink-600 justify-center items-center gap-2.5 flex hover:bg-red-800 ${filter == id? "bg-red-800" :"" }`}>
    <button 
    onClick={()=>{
    
      setFilter(id)
      hdl_filter_search(id)
      setSearchBarResult(null)

    }}
    className="text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
      {name}
    </button>
  </div>)
}