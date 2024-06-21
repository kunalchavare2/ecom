import React from "react";
import Info from "./../../Molecules/Info/Info";
import { ReactComponent as NoData } from "../../../assets/images/empty-cart.svg";
import { ReactComponent as PageNotFound } from "../../../assets/images/page-not-found.svg";
import { PropTypes } from "prop-types";
import Error from "../../../assets/images/error_2.png";

const InfoTypes = ({ type }) => {
  const infoTypes = {
    nodata: {
      isSvg: true,
      img: <NoData />,
      message: "There is No Information Available!",
    },
    error: {
      isSvg: false,
      img: Error,
      message: "Something went wrong!",
    },

    pageNotFound: {
      isSvg: true,
      img: <PageNotFound />,
      message: "Look like you're lost!",
    },
  };
  return (
    <div className="max-w-lg">
      <Info
        isSvg={infoTypes[`${type}`].isSvg}
        img={infoTypes[`${type}`].img}
        message={infoTypes[`${type}`].message}
      />
    </div>
  );
};

InfoTypes.propTypes = {
  // type have different types of states
  type: PropTypes.oneOf(["nodata", "pageNotFound", "error"]),
};

export default InfoTypes;
