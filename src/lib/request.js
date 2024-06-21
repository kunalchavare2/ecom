import axios from "axios";
import { testData, testSearchData } from "../utils/constant/testData";

const baseUrl = "https://api.unsplash.com";
const client_id = "client_id=nCUMuxzIJYsUy0KAQ1w3ZXU2lcByNFdD2eF30kwFlW0";

// const client_id = "client_id=xnGwmeCEpUPrgwNZsIyUYEdKqWixW6MuiYkheZ-ARWI";

export const getTotalImageCount = async function () {
  try {
    const response = await axios.get(baseUrl + "/stats/total?" + client_id);
    return Promise.resolve(response.data);
    // return Promise.resolve({ total_photos: 30 });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getImagesByPage = async function (page) {
  try {
    const response = await axios.get(
      baseUrl + `/photos?page='${page}'&` + client_id
    );
    return Promise.resolve(response.data);
    // return Promise.resolve(testData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getImagesBySearch = async function (query, page) {
  try {
    const response = await axios.get(
      baseUrl + `/search/photos?page=${page}&query=${query}&` + client_id
    );
    return Promise.resolve(response.data);
    // return Promise.resolve(testSearchData);
  } catch (error) {
    return Promise.reject(error);
  }
};
