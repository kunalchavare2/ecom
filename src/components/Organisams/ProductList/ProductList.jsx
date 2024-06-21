import React from "react";
import Card from "../../Molecules/Card/Card";
import Pagination from "../Pagination/Pagination";

const ProductList = ({ pageState, pagination, setPagination }) => {
  return (
    <div className="">
      <div className="min-h-96 grid grid-cols-1 md:grid-cols-2 lg:gap-4 lg:grid-cols-3 justify-items-center justify-evenly gap-10 mt-10 mb-5">
        {pageState.data &&
          pageState.data.map((imageData, i) => <Card item={imageData} />)}
      </div>

      <div className="">
        {pagination.totalCount && (
          <Pagination
            totalCount={pagination.totalCount}
            currentPage={pagination.page}
            changePage={(newPage) => {
              setPagination(newPage);
            }}
            pageSize={pagination.pageSize}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
