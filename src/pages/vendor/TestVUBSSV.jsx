import React from "react";

import VendorLookingUserReservation from "./VendorLookingUserReservation";
import VendorLookUser from "./VendorLookUser";

const arr = [
  {
    name: "Nong Mek",
    qw: "2",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNBaxR0effqhlvx1hq1sbzxxAIGOgCEgYAg&usqp=CAU",
    date: "22 Nov 2023 13:00 AM",
    status: "Pending",
  },
  {
    name: "Nong Tee",
    qw: "0",
    imgUrl:
      "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b4a1d7f6-d4f9-4dce-c978-add5fe218000/width=768/153055.jpeg",
    date: "19 Nov 2023 14:00 AM",
    status: "Accepted",
  },
  {
    name: "Nong Ice",
    qw: "15",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_M8Oqum4QkW9beroc4mXBskS9cRa4ira1ng&usqp=CAU",
    date: "16 Nov 2023 23:00 AM",
    status: "Canceled",
  },
  {
    name: "Nong Jame",
    qw: "1",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zYWCOBwrgKcbucXxO6QiMqFaKGgbBo8ukg&usqp=CAU",
    date: "010 Nov 2023 21:00 AM",
    status: "Pending",
  },
  {
    name: "Nong Rita",
    qw: "12",
    imgUrl:
      "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d10dcc6e-9945-4872-8a4b-7537443178db/width=512/00006-3749231127.jpeg",
    date: "05 Nov 2023 9:00 PM",
    status: "Accepted",
  },
  {
    name: "Nong non",
    qw: "20",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxQRnvPyQPaOGgpNYLIaKKbS99EIg-y1ydqew1UFy9ftvykcTodwe8u2kodZXjtdtYYI&usqp=CAU",
    date: "03 Nov 2023 11:00 PM",
    status: "Pending",
  },
];

export default function TestVUBSSV() {
  return (
    <>
      <div className="mobile:  justify-center items-center flex flex-col">
        <VendorLookingUserReservation />
        {arr.map((el, id) => {
          return (
            <div>
              <VendorLookUser
                name={el.name}
                qw={el.qw}
                date={el.date}
                status={el.status}
                imgUrl={el.imgUrl}
                id={el.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
