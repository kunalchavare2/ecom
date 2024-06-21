import React from "react";
import Button from "./../../Atoms/Button/Button";
import { DOTS, usePagination } from "../../../customHooks/usePagination";
import "./pagination.css";

const Pagination = ({
  totalCount,
  currentPage,
  siblingCount = 1,
  changePage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = Math.ceil(totalCount / pageSize) === currentPage;
  const firstPage = currentPage === 1;

  const handlePrev = () => {
    changePage(currentPage - 1);
  };
  const handleNext = () => {
    changePage(currentPage + 1);
  };

  const handlePage = (num) => {
    changePage(num);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="my-8 flex items-center justify-center gap-2 flex-wrap md:flex-nowrap">
      <Button
        className="btn btn-primary"
        title="Prev"
        active={true}
        disabled={firstPage}
        onClick={handlePrev}
      />

      {paginationRange.map((num, i) => {
        if (num === DOTS) {
          return (
            <Button
              key={i}
              className="join-item btn btn-square"
              title="..."
              disabled={true}
            />
          );
        }

        return (
          <Button
            key={i}
            className={`join-item btn btn-square dark:text-white ${
              currentPage === num ? "selected" : ""
            }`}
            title={num}
            onClick={(e) => handlePage(Number(e.target.textContent))}
          />
        );
      })}

      <Button
        className="btn btn-primary"
        title="Next"
        onClick={handleNext}
        disabled={lastPage}
      />
    </div>
  );
};

export default Pagination;
