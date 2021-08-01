const validUrl = require('valid-url');

/**
 * 
 * @param {url} url : suspected uel to check for its validity
 * @returns Boolean, true for valid url and false otherwise
 */
const isValidUrl = (url) => new Boolean(validUrl.isWebUri(value)(url));

module.exports = {
    isValidUrl,
};
