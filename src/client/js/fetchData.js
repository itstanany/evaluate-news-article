/**
 * 
 * @param {string} url API url to send request to
 * @param {{url: string}} data string represent a valid url for analyzing
 * @returns 
 */

const fetchData = async (url = '', data = { url: '' }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const newData = await response.json();
    return newData;
  } catch (error) {
    alert('Sorry, something went wrong!');
    return error;
  }
};

module.exports = {
  fetchData
};
