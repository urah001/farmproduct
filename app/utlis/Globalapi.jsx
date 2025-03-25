const axios = require("axios");
const {} = require("axios");

//xconst API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    // Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

const getFetch = () => axiosClient.get("/posts?populate=*");



export default { getFetch };
