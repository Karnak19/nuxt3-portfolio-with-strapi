import axios from "axios";

const api = axios.create({
  baseURL: process.env.STRAPI_URL || "http://localhost:1337",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getPage = async (slug: string) => {
  const { data } = await api.get(`/pages?slug=${slug}`);

  return data[0];
};

export default api;
