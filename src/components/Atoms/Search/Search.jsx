import React from "react";

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
    <div class="max-w-md min-w-72">
      <div class="relative flex items-center w-full h-10 border-gray-500 border-2 rounded-lg focus-within:shadow-lg  overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
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
