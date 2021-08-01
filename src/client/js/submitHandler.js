const { isValidUrl } = require("./checkURL");
const { fetchData } = require("./fetchData");
const { showResult } = require("./showResults");

const handleSubmit = async (e) => {
  e.preventDefault();
  const urlInput = document.getElementById('article-url');
  const { value } = urlInput;
  if (isValidUrl(value)) {
    const data = await fetchData('http://localhost:8081/analyse', { url: value });
    showResult({ data });
  } else {
    alert('Please, Enter a valid article URL');
  }
}

module.exports = {
  handleSubmit,
};
