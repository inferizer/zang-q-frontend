import maps from "../../assets/image/maps.png";
import logo from "../../assets/logo/logo.svg";
import food from "../../assets/icon/food.svg";
import map from "../../assets/icon/map.svg";
import user from "../../assets/icon/user.svg";

export default function HomePage() {
  return (
    <>
      <header className='shadow-md z-30 bg-white fixed w-screen px-4 py-2 bottom-0 desktop:bottom-auto top-0'>
        <div className='max-w-[800px] desktop:max-w-[1024px] m-auto flex justify-between items-center'>
          <img src={logo} alt='logo' />
          <nav>
            <ul className='flex gap-4'>
              <li className='text-sm px-4 flex flex-col justify-center items-center'>
                <img src={food} />
                Home
              </li>
              <li className='text-sm px-4 flex flex-col justify-center items-center'>
                <img src={map} />
                Near
              </li>
              <li className='text-sm px-4 flex flex-col justify-center items-center'>
                <img src={user} />
                User
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='w-screen bg-gray-50 px-4'>
        <div className='max-w-[800px] m-auto flex justify-center gap-4 items-center pt-[120px] pb-[64px] desktop:max-w-[1024px] desktop:gap-20'>
          <img src={maps} alt='hero-image' className='h-40 desktop:h-72 ' />
          <div className='flex flex-col gap-6 items-start'>
            <p className='text-md desktop:text-xl text-gray-500'>
              ซังคิว เว็บให้บริการจองคิวร้านอาหารแบบเรียลไทม์
              <br />
              ใช้งานง่าย ไม่ต้องติดตั้งแอป
            </p>
            <button className='flex justify-center items-center text-md desktop:text-xl bg-primary-400 rounded-3xl text-white px-4 py-1'>
              ร้านใกล้คุณ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
