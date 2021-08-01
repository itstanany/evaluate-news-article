import 'babel-polyfill'

const { fetchData } = require("../js/fetchData")

test('Test Data fetching method', () => {
  expect(fetchData).toBeDefined();
})