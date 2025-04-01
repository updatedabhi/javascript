const superagent = require("superagent");

superagent
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.log(err);
  });
