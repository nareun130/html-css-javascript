let url = "http://date.jsontest.com/";

let fetchFn = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("data:" + JSON.stringify(data));
  })
  .catch((error) => {
    console.log("error:" + error);
  });

fetch(url);
