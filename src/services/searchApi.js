export const options = {
  method: "GET",
  url: "https://gearbest.p.rapidapi.com/search",
  params: { query: "xiaomi", page: "1" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_API_HOST,
  },
};
