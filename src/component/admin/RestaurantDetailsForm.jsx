import Loading from "../loading";
export default function RestaurantDetailsForm({ shop }) {
  if (!shop) {
    return <Loading />;
  }
  const {
    shopName,
    shopMobile,
    ShopsCategories,
    picture,
    address,
    openingTimes,
    closingTimes,
  } = shop;
  return (
    <>
      <div className="mobile mt-20 bg-gray-200">
        <div className="mobile container mx-auto ">
          <div className="mobile items-center justify-center mx-auto">
            <section className="bg-white rounded-lg shadow-md">
              <div className="mobile flex flex-wrap">
                <div className=" mobile w-full mx-auto flex flex-col">
                  <div className=" mobile: text-xl text-gray-800 flex flex-col">
                    {shopName}
                  </div>
                  <div className="mobile items-center justify-center">
                    <img src={picture} alt={shopName} />
                  </div>
                </div>
                <div className="mobile w-full flex flex-col p-6 items-center justify-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {shopName}
                  </h2>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {shopMobile}
                  </h2>
                  <p className="text-md font-semibold text-gray-800 mb-2 leading-loose">
                    {ShopsCategories}
                  </p>
                  <p className="text-gray-600 text-md mb-2 leading-loose">
                    {address}
                  </p>
                  <div className="mt-4 text-gray-600">
                    <strong>{openingTimes}</strong>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <strong>{closingTimes}</strong>
                  </div>
                  <div>
                    <button className="mobile: mt-3 shadow bg-primary-500 hover:opacity-60 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Enter
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
