export default function VendorEditForm(){
    
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
      label: "enter your new phone number",
      onChange: hdl_input,
      value: authUser.mobile,
      type: "text",
      name: "mobile",
    },
  ];

  return (
    <div className=" bg-white p-4 z-20">
      <div className=" m-auto desktop:max-w-[1024px]  z-30 ">
      <div className=" flex justify-center items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden ">
          {profileImage ? (
            <img
              className=" w-full h-full "
              src={URL.createObjectURL(profileImage)}
              onClick={() => fileEl.current.click()}
            />
          ) : (
            <>
            <img
              className=" w-full h-full "
              src={authUser.profileImage}
              onClick={() => fileEl.current.click()}
              />
              </>
          )}
        </div>
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