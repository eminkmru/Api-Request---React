import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 81urJr1TynAg0Hn4FeLSs7al2I88WU4BnFHMdTzti1M",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
