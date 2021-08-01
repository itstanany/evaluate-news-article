// style sheets
require('./styles/resets.scss');
require('./styles/base.scss');
require('./styles/footer.scss');
require('./styles/form.scss');
require('./styles/header.scss');

const { handleSubmit } = require('./js/submitHandler');
/**
 * Upon DOM loading, register event handler for submit button
 */
window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
})

module.exports = {
  handleSubmit,
};
