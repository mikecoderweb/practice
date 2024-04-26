import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiUrl = "https://omofood.pythonanywhere.com/api/v1/users/"  ;
export const baseUrl = apiUrl;

const token = localStorage.getItem("user");

axios.defaults.baseURL = baseUrl;

export const api = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
