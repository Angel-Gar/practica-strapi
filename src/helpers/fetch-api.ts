import next from "next";
import qs from "qs";
import { getStrapiURL } from "./api-helper";

export const fetchApi = async(path: string, urlParamsObject = {}, options = {}) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      ...options,
      headers: {
        "Content-type": "application/json",
      },
    };

    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true,
    });
    console.log(queryString);

    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    const res = await fetch(requestUrl, mergedOptions)
    const data = await res.json();

    return data

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching API");
  }
};
