import React from "react";
import * as logo from "../assets/profile.png";
import * as sender1 from "../assets/sender1.jpg";
import * as sender2 from "../assets/sender2.jpg";
import * as sender3 from "../assets/sender3.jpg";

const img1 = logo.default;
const img2 = sender1.default;
const img3 = sender2.default;
const img4 = sender3.default;

type SenderImageProps = {
  count: Number;
};

const SenderImage: React.FC<SenderImageProps> = ({ count }) => {
  let image;
  switch (count) {
    case 1:
      image = img1;
      break;
    case 2:
      image = img2;
      break;
    case 3:
      image = img3;
      break;

    case 4:
      image = img4;
      break;

    default:
      break;
  }

  let classses;

  if (count === 1) {
    classses = "w-10 h-10 rounded-full";
  } else {
    classses = "w-16 h-16 rounded-full";
  }
  return (
    <div className={classses}>
      <img
        className="w-full h-full rounded-full "
        src={String(image)}
        alt="Profile"
      />
    </div>
  );
};

export default SenderImage;
