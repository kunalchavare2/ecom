import axios from "axios";
import { testData, testSearchData } from "../utils/constant/testData";

const baseUrl = "https://api.unsplash.com";

// Api Key
// const client_id = "client_id=nCUMuxzIJYsUy0KAQ1w3ZXU2lcByNFdD2eF30kwFlW0";

const client_id = "client_id=xnGwmeCEpUPrgwNZsIyUYEdKqWixW6MuiYkheZ-ARWI";

const isDevelopment = process.env.REACT_APP_ENV === "development";

export const getTotalImageCount = async function () {
  try {
    if (isDevelopment) {
      return Promise.resolve({ total_photos: 10000 });
    }
    // const response = await axios.get(baseUrl + "/stats/total?" + client_id);
    // return Promise.resolve(response.data);
    return Promise.resolve({ total_photos: 10000 });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getImagesByPage = async function (page) {
  try {
    if (isDevelopment) {
      return Promise.resolve(testData);
    }
    const response = await axios.get(
      baseUrl + `/photos?page=${page}&` + client_id
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getImagesBySearch = async function (query, page) {
  try {
    if (isDevelopment) {
      return Promise.resolve(testSearchData);
    }
    const response = await axios.get(
      baseUrl +
        `/search/photos?page='${page.toString()}'&query=${query}&` +
        client_id
    );

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
