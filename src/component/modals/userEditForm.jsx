import { useAuth } from "../../hook/useAuthContext";
import { useRef } from "react";
import Input from "../input";
export default function UserEditForm() {
  const {
    authUser,
    authUser: { id },
    hdl_user_edit,
    setUserEditOpen,
    hdl_input,
    hdl_user_edit_picture,
    profileImage,
    SetInput,
    setProfileImage,
  } = useAuth();

  const fileEl = useRef(null);
  if(authUser.role == "vendor"){
    const input_tag = [
      {
        id: 1,
        label: "enter your new username",
        onChange: hdl_input,
        value: authUser.username,
        type: "text",
        name: "username",
      },
    ];

    return (
      <div className=" bg-white p-4 z-20">
        <div className=" m-auto desktop:max-w-[1024px]  z-30 ">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            {profileImage ? (
              <img
                className=" w-full h-full "
                src={URL.createObjectURL(profileImage)}
                onClick={() => fileEl.current.click()}
              />
            ) : (
              <img
                className=" w-full h-full "
                src={authUser.profileImage}
                onClick={() => fileEl.current.click()}
              />
            )}
          </div>
          <input
            type="file"
            onChange={hdl_user_edit_picture}
            ref={fileEl}
            className={` hidden border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500`}
          />

          {input_tag.map((el) => {
            return (
              <>
                <label>{el.label}</label>
                <Input
                  key={el.id}
                  type={el.type}
                  defaultValue={el.value}
                  onChange={el.onChange}
                  name={el.name}
                />
              </>
            );
          })}

          <div className=" flex mt-4 gap-2">
            <button
              onClick={() => hdl_user_edit(id)}
              className="  flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2"
            >
              submit
            </button>
            <button
              onClick={() => {
                setProfileImage(null);
                setUserEditOpen(false);
              }}
              className=" flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2 "
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );



  }


  if (authUser.googleId || authUser.lineId) {
    const input_tag = [
      {
        id: 1,
        label: "enter your new username",
        onChange: hdl_input,
        value: authUser.username,
        type: "text",
        name: "username",
      },
    ];

    return (
      <div className=" bg-white p-4 z-20">
        <div className=" m-auto desktop:max-w-[1024px]  z-30 ">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            {profileImage ? (
              <img
                className=" w-full h-full "
                src={URL.createObjectURL(profileImage)}
                onClick={() => fileEl.current.click()}
              />
            ) : (
              <img
                className=" w-full h-full "
                src={authUser.profileImage}
                onClick={() => fileEl.current.click()}
              />
            )}
          </div>
          <input
            type="file"
            onChange={hdl_user_edit_picture}
            ref={fileEl}
            className={` hidden border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500`}
          />

          {input_tag.map((el) => {
            return (
              <>
                <label>{el.label}</label>
                <Input
                  key={el.id}
                  type={el.type}
                  defaultValue={el.value}
                  onChange={el.onChange}
                  name={el.name}
                />
              </>
            );
          })}

          <div className=" flex mt-4 gap-2">
            <button
              onClick={() => hdl_user_edit(id)}
              className="  flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2"
            >
              submit
            </button>
            <button
              onClick={() => {
                setProfileImage(null);
                setUserEditOpen(false);
              }}
              className=" flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2 "
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (authUser.email) {
    const input_tag = [
      {
        id: 1,
        label: "enter your new username",
        onChange: hdl_input,
        value: authUser.username,
        type: "text",
        name: "username",
      },
      {
        id: 2,
        label: "enter your new email",
        onChange: hdl_input,
        value: authUser.email,
        type: "text",
        name: "email",
      },
    ];

    return (
      <div className=" bg-white p-4 z-20">
        <div className=" m-auto desktop:max-w-[1024px]  z-30 ">
          {profileImage ? (
            <img
              src={URL.createObjectURL(profileImage)}
              onClick={() => fileEl.current.click()}
            />
          ) : (
            <img
              src={authUser.profileImage}
              onClick={() => fileEl.current.click()}
            />
          )}
          <input
            type="file"
            onChange={hdl_user_edit_picture}
            ref={fileEl}
            className={` hidden border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500`}
          />

          {input_tag.map((el) => {
            return (
              <>
                <label>{el.label}</label>
                <Input
                  key={el.id}
                  type={el.type}
                  defaultValue={el.value}
                  onChange={el.onChange}
                  name={el.name}
                />
              </>
            );
          })}
          <div className=" flex mt-4 gap-2">
            <button
              onClick={() => hdl_user_edit(id)}
              className="  flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2"
            >
              submit
            </button>
            <button
              onClick={() => {
                setProfileImage(null);
                setUserEditOpen(false);
              }}
              className=" flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2 "
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (authUser.mobile) {
    return (
      <div className=" bg-red-200 p-4 z-20">
        <div className="max-w-[800px] m-auto desktop:max-w-[1024px]  z-30 ">
          <div className=" flex mt-4 gap-2">
            <button
              onClick={() => hdl_user_edit(id)}
              className="  flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2"
            >
              submit
            </button>
            <button
              onClick={() => {
                setProfileImage(null);
                setUserEditOpen(false);
              }}
              className=" flex justify-center items-center focus:outline-none text-white bg-primary-400 hover:bg-red-500 font-medium rounded-lg text-sm p-2 "
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
