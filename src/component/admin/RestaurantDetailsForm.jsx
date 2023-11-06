export default function RestaurantDetails() {
  return (
    <div className="md:max-sm:flex">
      <div className="container bg-blueLight mx-auto p-7">
        <div className="bg-primaryWhite rounded-xl shadow-md overflow-hidden">
          <div className=" text-xl font-bold">Restaurant Details</div>
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-full"
                src="/img/shop-image.jpg"
                alt="Shop Image"
              />
            </div>
            <div className="md:w-1/2">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-full"
                src="/img/shop-image.jpg"
                alt="Shop map"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">Shop Name :</h2>
              <p className="text-primaryBlack mb-4">Shop Type : </p>
              <p className="text-primaryBlack mb-4">Shop Address:</p>
              <p className="text-primaryBlack mb-4">
                Phone Number: 08345678901
              </p>
              <p className="text-primaryBlack mb-4">
                Opening Hours: Monday-Friday, 9 AM
              </p>
              <p className="text-gray-700">
                Closing Hours: Monday-Friday, 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
