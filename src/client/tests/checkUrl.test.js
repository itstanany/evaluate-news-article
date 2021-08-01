const { isValidUrl } = require('../js/checkURL');

test('Test input URL validity', () => {
  expect(isValidUrl('some string')).toBeFalsy();
  expect(isValidUrl(55)).toBeFalsy();
  expect(isValidUrl('$2314nj jn545 %%$$$ ')).toBeFalsy();
  expect(isValidUrl('https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries')).toBeTruthy();
})