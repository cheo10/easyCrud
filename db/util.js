function getTimeInSeconds(time) {
  return Math.round(Date(time) / 1000);
}

module.exports = {
  getTimeInSeconds
};
