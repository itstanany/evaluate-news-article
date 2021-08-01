/**
 * Manipulate DOM to show result analysis
 * @param {Object, API response} param0 api response contain analysis results
 */

const showResult = ({ data }) => {
  document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
  document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
  document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
}

module.exports = {
  showResult,
}