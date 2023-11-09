export default function RestaurantDetails() {
  return (
    <div className=" mobile: flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className=" mobile: w-full p-6 m-auto bg-white ring-2 ring-primary-500 lg:max-w-xl">
        <h1 className=" mobile: text-3xl font-semibold text-center text-gray-500 underline uppercase ">
          Restaurant Detail
        </h1>
        <form className=" mobile: mt-6 flex items-center justify-center">
          <div className=" mobile: mb-2 flex items-center justify-center">
            <label>
              <span className="text-gray-700">ชื่อร้าน</span>
              <input
                type="text"
                name="name"
                className=" mobile:
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                placeholder="ชื่อร้าน..."
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">เบอร์โทรร้าน</span>
              <input
                name="mobile"
                type="text"
                className=" mobile:
                block
                w-full
                mt-2 px-16 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                placeholder="เบอร์โทร..."
                required
              />
            </label>
          </div>

          <label>
            Room type:
            <select>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label>

          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
                block
                w-full
                mt-2 px-16 py-8
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
            >
              Confirm edited
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
