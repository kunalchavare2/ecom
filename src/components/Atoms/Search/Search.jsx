import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = ({
  placeholderValue,
  searchHandler,
  defaultValue,
  searchRef,
  searchEnterHandler,
  searchInput,
  setSearchInput,
  ...props
}) => {
  const onChangeHandler = (e) => {
    if (setSearchInput) setSearchInput(e.target.value);
  };

  return (
    <div className="max-w-md min-w-72">
      <div className="relative flex items-center w-full h-10 border-gray-500 border-2 rounded-lg focus-within:shadow-lg  overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300 text-sm">
          <IoIosSearch className="text-2xl" />
        </div>

        <input
          className="peer pl-2 h-full w-full outline-none text-sm text-gray-600 dark:text-white pr-2"
          type="text"
          id="search"
          placeholder={placeholderValue}
          onChange={onChangeHandler ?? (() => {})}
          value={searchInput}
          ref={searchRef}
          onKeyUp={searchEnterHandler}
          autoFocus
          {...props}
        />
      </div>
    </div>
  );
};

export default Search;
