import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../hook/useVendor";
import Map from "../map/Map";
import { useEffect } from "react";
import { useState } from "react";
import { PersonalIcon, GroupIcon } from "../../assets/icon/Icon";
import { DesktopTimePicker } from "@mui/x-date-pickers";
export default function VendorApplication() {
	const {
		hdl_input,
		hdl_application_submit,
		setShopPictureFile,
		setIdCardFile,
		idCardFile,
		shopPictureFile,
		juristicFile,
		setJuristicFile,
		appInput,
		hdl_checkBox,
		allCategory,
		hdl_MUI_timePicker_opening,
		hdl_MUI_timePicker_closing,

	} = useVendor();

	const [selectedItem, setSelectedItem] = useState('personal');
	const navigate = useNavigate();
	const { authUser } = useAuth();
	// console.log(authUser);

	useEffect(() => {

	}, []);

	const inputTag = [
		{ id: 1, name: "shopName", label: "restaurant name", picture: false },
		{ id: 4, name: "shopMobile", label: "restaurant tel.", picture: false },
		{ id: 7, name: "ownerFirstName", label: "owner firstName", picture: false },
		{ id: 8, name: "ownerLastName", label: "owner lastName", picture: false },
		{ id: 9, name: "idNumber", label: "id number", picture: true },
		{ id: 10, name: "juristicId", label: "juristic id", picture: true },
	];

	const DatePicker = [
		{ id: 1, name: "", label: "", },
		{ id: 1, name: "", label: "", },
	]

	const hdl_submit = async (e) => {
		e.preventDefault();
		hdl_application_submit();
	};
	return (
		<section className="section flex flex-col gap-12 pb-20 desktop:pt-16">
			<div className="container flex justify-center gap-8 pt-10">
				<div
					className={`flex flex-col gap-2 cursor-pointer text-sm rounded-lg px-8 py-2 justify-center items-center border-solid border-2 border-gray-300 text-gray-400 desktop:text-lg hover:bg-primary-50 ${selectedItem === 'personal' ? 'border-primary-500 text-primary-500' : ''}`}
					onClick={() => setSelectedItem('personal')}
				>
					<PersonalIcon className={`fill-current ${selectedItem === 'personal' ? 'text-primary-500' : ''}`} />
					<p>Person</p>
				</div>

				<div
					className={`flex flex-col gap-2 cursor-pointer text-sm rounded-lg px-8 scroll-py-24 justify-center items-center border-solid border-2 border-gray-300 text-gray-400 desktop:text-lg hover:bg-primary-50 ${selectedItem === 'group' ? 'border-primary-500 text-primary-500' : ''}`}
					onClick={() => setSelectedItem('group')}
				>
					<GroupIcon className={`fill-current ${selectedItem === 'group' ? 'text-primary-500' : ''}`} />
					<p>Juristic</p>
				</div>

			</div>

			<form key="1" className="container min-w-[240px] flex flex-col gap-4" onSubmit={hdl_submit} >
				{inputTag.map((el) => {
					if (selectedItem === 'personal' && el.name === "juristicId") {
						return null
					}

					return (
						<div key={el.id} className=" flex flex-col ">

							<label className="font-medium">{el.label}</label>
							<Input
								name={el.name}
								type="text"
								placeholder={el.label}
								onChange={hdl_input}
							/>

							{(el.name === "shopName") &&
								<div className="flex flex-col">
									{shopPictureFile ? (
										<img src={URL.createObjectURL(shopPictureFile)} />
									) : null}
									<label className="font-medium">shop picture file</label>
									<input
										className="relative"
										type="file"
										onChange={(e) => {
											if (e.target.files[[0]]) {
												setShopPictureFile(e.target.files[[0]]);
											}
										}}
									/>
								</div>
							}
							{(el.name === "juristicId") &&
								<div className="flex flex-col">
									{juristicFile ? (
										<img src={URL.createObjectURL(juristicFile)} />
									) : null}
									<label className="font-medium">juristic file</label>
									<input
										type="file"
										onChange={(e) => {
											if (e.target.files[[0]]) {
												setJuristicFile(e.target.files[[0]]);
											}
										}}
									/>
								</div>
							}
							{(el.name === "idNumber") &&
								<div className="flex flex-col">
									{idCardFile ? <img src={URL.createObjectURL(idCardFile)} /> : null}
									<label className="font-medium">ID card file</label>
									<input
										type="file"
										onChange={(e) => {
											console.log(setIdCardFile);
											if (e.target.files[[0]]) {
												setIdCardFile(e.target.files[[0]]);
											}
										}}
									/>
								</div>
							}
						</div>
					);
				})}

				<h1>select your category</h1>
				{allCategory.map((el) => {
					return (
						<div>
							<input type="checkbox" value={el.id} onChange={hdl_checkBox} />
							<label className="font-medium">{el.name}</label>
						</div>
					);
				})}

				<Map viewMode={false} />

				<DesktopTimePicker onChange={e => hdl_MUI_timePicker_opening(e)} label="Opening time" />
				<DesktopTimePicker onChange={e => hdl_MUI_timePicker_closing(e)} label="Closing time" />

				<button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Continue</button>

			</form>

		</section>


	);
}
