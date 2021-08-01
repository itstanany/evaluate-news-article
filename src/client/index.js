
const { handleSubmit } = require('./js/submitHandler');

window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
})

module.exports = {
  handleSubmit,
};
