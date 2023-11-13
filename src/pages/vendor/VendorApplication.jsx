import { useAuth } from "../../hook/useAuthContext";
import Input from "../../component/input";
import { useNavigate } from "react-router-dom";
import { useVendor } from "../../hook/useVendor";
import Map from "../map/Map";
import { useEffect } from "react";
import { useState } from "react";
import { PersonalIcon, GroupIcon } from "../../assets/icon/Icon";


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
	} = useVendor();

	const [selectedItem, setSelectedItem] = useState('personal');
	const navigate = useNavigate();
	const { authUser } = useAuth();
	// console.log(authUser);

	useEffect(() => {
		console.log("appInput", appInput);
	}, []);

	const data = [
		{ lat: 13.7582, lng: 100.54, title: "ตี๋น้อย" },
		{ lat: 13.762, lng: 100.5352833, title: "after you" },
		{ lat: 13.755, lng: 100.532, title: "ถ้วยถัง" },
		{ lat: 13.76, lng: 100.53, title: "อี้จาสุกี้หม่าล่า" },
		{ lat: 13.751, lng: 100.538, title: "นักล่าหมูกระทะ" },
		{ lat: 13.748, lng: 100.55, title: "bar b gon" },
		{ lat: 13.745, lng: 100.55, title: "ไอติมทุนจีน" },

		{ lat: 13.802, lng: 100.537, title: "4868.204100256101" },
		{ lat: 13.709, lng: 100.532, title: "5499.429088629627" },
		{ lat: 13.762, lng: 100.586, title: "5502.696668591629" },
		{ lat: 13.758, lng: 100.482, title: "5757.836659596614" },
		{ lat: 13.759, lng: 100.493, title: "out of area example" },
		{ lat: 13.715, lng: 100.511, title: "out of area example 5" },
		{ lat: 13.805, lng: 100.53, title: "out of area example 6" },
		{ lat: 13.764, lng: 100.589, title: "out of area example 7" },
	];

	const inputTag = [
		{ id: 1, name: "shopName", label: "restaurant name", picture: false },
		{ id: 4, name: "shopMobile", label: "restaurant tel.", picture: false },
		{ id: 5, name: "openingTimes", label: "opening times", picture: false },
		{ id: 6, name: "closingTimes", label: "closing times", picture: false },
		{ id: 7, name: "ownerFirstName", label: "owner firstName", picture: false },
		{ id: 8, name: "ownerLastName", label: "owner lastName", picture: false },
		{ id: 9, name: "idNumber", label: "id number", picture: true },
		{ id: 10, name: "juristicId", label: "juristic id", picture: true },
	];

	const hdl_submit = async (e) => {
		e.preventDefault();
		hdl_application_submit();
	};
	return (

		<section className="section my-24 flex flex-col gap-12">
			<div className="container flex justify-center gap-8">
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
							<label className="font-medium">{el.name}</label>
							<input type="checkbox" value={el.id} onChange={hdl_checkBox} />
						</div>
					);
				})}

				<h1>google map api</h1>
				{/* <Map viewMode={false} /> */}
				{authUser.role === "user" ? (
					<Map
						viewMode={true}
						location={{ lat: 13.7462, lng: 100.5347 }}
						data={data}
					/>
				) : (
					<Map viewMode={false} />
				)}
				<button className="mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Continue</button>
			</form>

		</section>


	);
}
