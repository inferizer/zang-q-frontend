import React, { useState } from "react";
import { useAdmin } from "../../hook/useAdmin";

export default function CategoryCRUDPage() {
  const {
    allCategory,
    hdl_input,
    setSelectCategory,
    hdl_new_category,
    hdl_update_category,
    hdl_delete_category,
  } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  return (
    <div className="bg-white flex justify-center items-start h-screen">
      <div className=" mobile:w-[800px] desktop:w-[1024px] mx-auto flex flex-col items-center py-6 rounded-lg gap-4 mt-20 bg-white w-[800px]">
        {isOpen ? (
          <div className="w-[500px] h-[500px] shadow-xl items-center justify-center overflow-hidden rounded-md">
            {modal === "add" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  hdl_new_category();
                  setIsOpen(false);
                }}
              >
                <label className="block mb-4 text-lg text-center ">
                  Enter new category
                </label>
                <input
                  name="name"
                  onChange={hdl_input}
                  className="border border-blue-500 p-2 w-full mb-4 "
                />
                <button className=" bg-blue-500 text-white px-4 py-2 mb-4">
                  Submit
                </button>
              </form>
            )}
            {modal === "update" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  hdl_update_category();
                  setIsOpen(false);
                }}
              >
                <label className="block mb-4">Enter new name</label>
                <input
                  name="name"
                  onChange={hdl_input}
                  className="border border-blue-400 p-2 w-full mb-2"
                />

                <button className=" bg-blue-500 text-white px-4 py-2 mt-2">
                  Submit
                </button>
              </form>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                setModal("");
                setSelectCategory(0);
              }}
              className=" bg-red-500 text-white px-4 py-2 mt-4"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div className="w-[400px] h-[400px] flex flex-col justify-center shadow-xl">
              <h1 className="text-2xl font-semibold mb-6 text-center">
                All Categories
              </h1>

              {allCategory.map((el) => (
                <div className=" items-center gap-4" key={el.id}>
                  <h1>{el.name}</h1>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setModal("update");
                        setSelectCategory(el.id);
                      }}
                      className="bg-blue-500 text-white px-2 py-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        hdl_delete_category(el.id);
                      }}
                      className="bg-red-500 text-white px-2 py-2 "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setModal("add");
                  }}
                  className="flex flex-col items-center justify-center bg-green-500 text-white font-semibold mt-12 py-2 px-12 rounded-md
                "
                >
                  Add Category
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
