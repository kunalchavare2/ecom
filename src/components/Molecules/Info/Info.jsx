import React from "react";

const Info = ({ isSvg = true, img, message }) => {
  return (
    <div>
      <div className="max-w-sm">
        {!isSvg && <img src={img} alt={message} />}
        {isSvg && img}
      </div>
      <div className="text-center text-xl">{message}</div>
    </div>
  );
};

export default Info;
