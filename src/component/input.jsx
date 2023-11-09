export default function Input({ type = "text", placeholder, name, onChange, id }) {
    return <input
        className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
        key={id}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
    />
}