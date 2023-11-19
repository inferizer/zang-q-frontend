import React from 'react'
import Map from '../map/Map';
import { useAuth } from '../../hook/useAuthContext';
import { useUser } from '../../hook/useUser';

export default function ShopMap() {

    const { authUser } = useAuth();

    const { allShop } = useUser();

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

    return (
        <div className='container'>
            {authUser.role === "user" ? (
                <Map
                    viewMode={true}
                    data={allShop}
                />
            ) : (
                <Map viewMode={false} />
            )}
        </div>

    )
}
