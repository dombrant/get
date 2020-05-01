import get from "./get.js";

get("http://api.zippopotam.us/us/90210")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
