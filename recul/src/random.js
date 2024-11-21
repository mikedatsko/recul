module.exports = {
  id: () => {
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    return generateRandomNumber(1000000, 9999999) + new Date().getTime();
  }
};
