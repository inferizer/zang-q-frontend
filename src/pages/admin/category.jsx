import { useState } from "react";
import { useAdmin } from "../../hook/useAdmin";
export default function CategoryPage() {
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
    <div>
      {isOpen ? (
        <div>
          {modal == "add" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                hdl_new_category();
                setIsOpen(false);
              }}
            >
              <label>enter new category</label>
              <input
                name="name"
                onChange={hdl_input}
                className=" border border-blue-400"
              />
              <button>submit</button>
            </form>
          )}
          {modal == "update" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                hdl_update_category();
                setIsOpen(false);
              }}
            >
              <label>Enter new name </label>
              <input
                name="name"
                onChange={hdl_input}
                className=" border border-blue-400"
              />

              <button>submit</button>
            </form>
          )}
          <button
            onClick={() => {
              setIsOpen(false);
              setModal("");
              setSelectCategory(0);
            }}
          >
            {" "}
            cancel
          </button>
        </div>
      ) : (
        <>
          <div>
            <h1>all category</h1>

            {allCategory.map((el) => {
              return (
                <div className="flex gap-4" key={el.id}>
                  <h1>{el.name}</h1>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setModal("update");
                      setSelectCategory(el.id);
                    }}
                  >
                    update
                  </button>

                  <button
                    onClick={() => {
                      hdl_delete_category(el.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}

            <button
              onClick={() => {
                setIsOpen(true);
                setModal("add");
              }}
            >
              {" "}
              add category
            </button>
          </div>
        </>
      )}
    </div>
  );
}
