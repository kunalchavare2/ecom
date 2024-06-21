import React from "react";

const Modal = ({ imgSrc }) => {
  return (
    <dialog id="my_modal_1" className="p-0 h-screen w-screen">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div className="h-full">
        <img
          src={imgSrc}
          alt=""
          className="object-scale-down max-h-full w-full"
        />
      </div>
    </dialog>
  );
};

export default Modal;
