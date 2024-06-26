import React, { useEffect, useState } from "react";
import Search from "../../components/Atoms/Search/Search";
import {
  getImagesByPage,
  getImagesBySearch,
  getTotalImageCount,
} from "../../lib/request";
import LoadingImg from "../../components/Atoms/Loading/LoadingImg";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPageState,
  savePageState,
} from "../../store/PaginationSlice/PaginationSlice";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import ProductList from "../../components/Organisams/ProductList/ProductList";
import { saveSearchState } from "../../store/SearchSlice/SearchSlice";

const Home = () => {
  const dispatch = useDispatch();
  const paginationState = useSelector((store) => store.paginationState);
  const searchState = useSelector((store) => store.searchState);
  const [search, setSearch] = useState(searchState.value ?? "");
  const [pageState, setPageState] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const [pagination, setPagination] = useState(paginationState);

  useEffect(() => {
    if (!search) {
      setPageState((prev) => {
        return {
          error: null,
          data: null,
          loading: true,
        };
      });
      if (!pagination.totalCount && !search) {
        getTotalImageCount()
          .then((res) => {
            setPagination((prev) => ({
              ...prev,
              totalCount: Number(res.total_photos),
            }));
          })
          .catch((err) => {
            console.log(err);
            setPageState((prev) => ({
              ...prev,
              loading: false,
              error: err.response.data,
            }));
          });
      }

      if (pagination.totalCount) {
        getImagesByPage(pagination.page)
          .then((res) => {
            if (res.length > 0) {
              setPageState((prev) => ({
                data: res,
                loading: false,
                error: null,
              }));
            } else {
              setPageState((prev) => ({
                data: null,
                loading: false,
                error: "No data available",
              }));
            }
          })
          .catch((err) => {
            console.log(err);
            setPageState((prev) => ({
              data: null,
              loading: false,
              error: err.response.data,
            }));
          });
      }
    }
  }, [pagination.page, pagination.totalCount, search]);

  // to keep the pagination state consistent across page navigation
  useEffect(() => {
    dispatch(savePageState(pagination));
  }, [pagination, dispatch]);

  useEffect(() => {
    setPageState((prev) => {
      return {
        error: null,
        data: null,
        loading: true,
      };
    });
    const timeout = setTimeout(() => {
      dispatch(resetPageState());
      dispatch(saveSearchState(search));
      if (search && search.length > 0) {
        getImagesBySearch(search, pagination.page)
          .then((res) => {
            if (res.total > 0) {
              setPagination((prev) => ({
                ...prev,
                totalCount: Number(res.total),
              }));

              setPageState((prev) => {
                return {
                  error: null,
                  data: res.results,
                  loading: false,
                };
              });
            } else {
              setPageState((prev) => {
                return {
                  error: "NO results",
                  data: null,
                  loading: false,
                };
              });
            }
          })
          .catch((err) => {
            console.log(err);
            setPageState((prev) => {
              return {
                error: err.response.data,
                data: null,
                loading: false,
              };
            });
          });
      } else {
        setPagination((prev) => ({
          ...prev,
          totalCount: null,
        }));
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, pagination.page, dispatch]);

  return (
    <div className="min-h-screen p-8 flex flex-col ">
      <div className="flex justify-end">
        <Search searchInput={search} setSearchInput={setSearch} />
      </div>
      {/* Error state */}
      {pageState.error && (
        <div className=" flex justify-center items-center">
          <InfoTypes type="error" message={pageState.error} />
        </div>
      )}
      {/* Loading state */}
      {pageState.loading && (
        <div className="flex justify-center items-center">
          <LoadingImg className="w-10 bg-transparent" />
        </div>
      )}

      {/* Displaying cards data */}

      <ProductList
        pagination={pagination}
        pageState={pageState}
        setPagination={(newPage) => {
          setPagination((prev) => ({
            ...prev,
            page: newPage,
          }));
        }}
      />
    </div>
  );
};

export default Home;
