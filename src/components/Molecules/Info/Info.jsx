import React from "react";

const Info = ({ isSvg = true, img, message }) => {
  return (
    <div>
      <div>
        {!isSvg && <img src={img} alt={message} />}
        {isSvg && img}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Info;
