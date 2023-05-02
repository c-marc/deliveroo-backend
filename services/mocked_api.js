const axios = require("axios");

const token = process.env.API_KEY;

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const endpointTest =
  "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP";

const fetchMockedDeliveroo = async () => {
  try {
    const result = await axios.get(endpointTest, config);
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch Deliveroo");
  }
};

module.exports = fetchMockedDeliveroo;
