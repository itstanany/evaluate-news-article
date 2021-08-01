const { default: axios } = require("axios");

const {
  API_KEY, ANALYSIS_API,
} = process.env;

const analyse = async (req, res) => {
  const { body: { url } } = req;
  const apiUrl = `${ANALYSIS_API}?key=${API_KEY}&url=${url}&lang=en`
  const response = await axios.post(apiUrl);
  const result = response.data;
  res.send(result);
}

module.exports = {
  analyse,
}