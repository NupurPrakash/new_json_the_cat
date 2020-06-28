const request = require('request');
let breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
//request(`https://api.thecatapi.com/v1/breed/search?name=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(`Error is, ${error}`);
    console.log("StatusCode", response && response.statusCode);
  } else {
    //console.log(typeof body);
    let data = JSON.parse(body);
    //console.log(data);
    //console.log("Type after parsing", typeof(data));
    let breed = data[0];
    if (breed) {
      console.log("Description:", breed.description);
    } else {
      console.log("Breed not found");
    }
    
  }

});