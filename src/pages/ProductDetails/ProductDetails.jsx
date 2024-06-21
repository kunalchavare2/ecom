import React from "react";
import { BiDownload } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { IoIosHeart } from "react-icons/io";
import { LuLink2 } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/_helpers";
import { GrSecure } from "react-icons/gr";
import Modal from "../../components/Organisams/Modal/Modal";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import { IoChevronBack } from "react-icons/io5";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state ? location.state.item : null;

  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="h-screen flex items-center justify-center">
        <InfoTypes type="pageNotFound" />
      </div>
    );
  }

  const openInFullScreen = () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <section className="relative py-10 lg:py-24 ">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-4 left-2 flex items-center gap-2 text-black dark:text-white "
      >
        <IoChevronBack className="text-xl" />
        <span className="text-md">back</span>
      </button>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-8 ">
          <div className="pro-detail w-full flex flex-col justify-center  max-lg:max-w-[608px] max-lg:mx-auto">
            <h2 className="flex items-center gap-2 mb-2 font-manrope font-bold text-3xl leading-10 dark:text-white text-gray-900">
              {product.user.name}
              <Link to={product.user.portfolio_url} target="_blank">
                <LuLink2 />
              </Link>
            </h2>
            <div className="flex items-center gap-4">
              <div className="p-4 flex items-center gap-2 text-lg">
                <CgCalendar />
                <span className="text-sm">
                  {formatDate(product.created_at)}
                </span>
              </div>{" "}
              <div className="p-4 flex items-center gap-2 text-lg">
                <GrSecure />
                <span className="text-sm">
                  {formatDate(product.created_at)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="flex items-center gap-2 font-manrope font-semibold text-2xl leading-9 dark:text-white text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                <IoIosHeart className="text-red-600" /> {product.likes}
              </h6>
              <div className="flex items-center gap-2">
                <span className="pl-2 font-normal leading-7 text-blue-500 text-2xl ">
                  <BiDownload />
                </span>
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                  {product.likes * 2}
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-8 ">
              {product.alt_description}
            </p>
          </div>
          <div className=" relative h-96">
            <img
              src={product.urls.full}
              alt={product.alt_description}
              className="object-contain max-h-full w-full"
              onClick={openInFullScreen}
            />
          </div>
        </div>
      </div>
      <Modal imgSrc={product.urls.full} />
    </section>
  );
};

export default ProductDetails;
