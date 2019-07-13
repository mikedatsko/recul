module.exports = function getHash(str) {
  let hash = 0;
  const len = str.length;

  if (len === 0) {
    return hash;
  }

  let char = 0;
  for (let i = 0; i < len; i++) {
    char = str.charCodeAt(i);
    hash = hash + char;
  }

  return hash;
};
