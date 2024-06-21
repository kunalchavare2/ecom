import React from "react";
import LoadingGif from "../../../assets/images/loading.svg";

const LoadingImg = ({ ...props }) => {
  return (
    <div {...props}>
      <img src={LoadingGif} alt="loading" />
    </div>
  );
};

export default LoadingImg;
