const options = {
  method: "GET",
  url: "https://ali-express1.p.rapidapi.com/search",
  params: { query: "", page: "1" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_API_HOST,
  },
};

export default options;
