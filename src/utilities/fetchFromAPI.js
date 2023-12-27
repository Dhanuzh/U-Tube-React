const axios = require("axios");

const BASE_URL = "https://youtube-v311.p.rapidapi.com/activities/";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    maxResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": "fee87b87abmsh53d90dbf5cd9f1dp11c6cdjsnb37fdc26f56e",
    "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
