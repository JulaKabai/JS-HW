const getSimbol = () =>
  String.fromCharCode(Date.now().toString().substring(-5));

const getRandomChinese = (length) => {
  return new Promise((resolve, reject) => {
    if (length > 0) {
      let str = "";
      for (let i = 1; i <= length; i++) {
        setTimeout(() => {
          str += getSimbol();
          if (i === length) {
            resolve(str);
          }
        }, 50 * i);
      }
    } else {
      reject();
    }
  });
};
getRandomChinese(4)
  .then((result) => console.log(result))
  .catch(() => console.log("ERROR"));
