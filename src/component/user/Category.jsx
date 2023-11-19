
import { useUser } from "../../hook/useUser"
export default function Category({ name, setFilter, id, hdl_filter_search, setSearchBarResult }) {
  const { filter } = useUser()

  return (
    <div className={`px-2.5 py-0.5 rounded-2xl border border-primary-500 justify-center items-center gap-2.5 flex ${filter == id ? "bg-primary-100" : ""}`}>
      <button
        onClick={() => {

          setFilter(id)
          hdl_filter_search(id)
          setSearchBarResult(null)

        }}
        className="text-pink-600 text-sm font-normal font-['IBM Plex Sans Thai']">
        {name}
      </button>
    </div>)
}