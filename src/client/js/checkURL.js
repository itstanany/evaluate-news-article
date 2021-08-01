const validUrl = require('valid-url');

/**
 * 
 * @param {url} url : suspected uel to check for its validity
 * @returns Boolean, true for valid url and false otherwise
 */
const isValidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    isValidUrl,
};
