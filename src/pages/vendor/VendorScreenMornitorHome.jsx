import React from "react";
import VenderLookPicture from "./VenderLookPicture";
import VenderLookQandName from "./VenderLookQandName";

const arr = [
  {
    name: "mek",
    q: "A01",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjT2rLPed5k1MLqdolS7JoxFGPFTZINrBDPA&usqp=CAU",
  },
  {
    name: "tee",
    q: "A11",
    img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b4a1d7f6-d4f9-4dce-c978-add5fe218000/width=768/153055.jpeg",
  },
  {
    name: "ice",
    q: "C03",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_M8Oqum4QkW9beroc4mXBskS9cRa4ira1ng&usqp=CAU",
  },
  {
    name: "jame",
    q: "A06",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zYWCOBwrgKcbucXxO6QiMqFaKGgbBo8ukg&usqp=CAU",
  },
  {
    name: "rita",
    q: "B02",
    img: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d10dcc6e-9945-4872-8a4b-7537443178db/width=512/00006-3749231127.jpeg",
  },
  {
    name: "non",
    q: "C01",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxQRnvPyQPaOGgpNYLIaKKbS99EIg-y1ydqew1UFy9ftvykcTodwe8u2kodZXjtdtYYI&usqp=CAU",
  },
];

export default function VendorScreenMornitorHome() {
  return (
    <>
      <div className="mobile:  justify-center items-center flex flex-col">
        <VenderLookQandName />
        {arr.map((el, id) => {
          return (
            <div>
              <VenderLookPicture
                img={el.img}
                name={el.name}
                q={el.q}
                id={el.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
