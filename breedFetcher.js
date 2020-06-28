const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
  //request(`https://api.thecatapi.com/v1/breed/search?name=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Error happened: ${error}`, null);
      //console.log(`Error is, ${error}`);
      //console.log("StatusCode", response && response.statusCode);

    } else {
      let data = JSON.parse(body);
      let breed = data[0];
      if (breed) {
        callback(null, breed.description);
        //console.log("Description:", breed.description);
      } else {
        callback(`Breed, ${breedName} not found`, null);
        //console.log("Breed not found");
      }
    
    }

  });
};

module.exports = { fetchBreedDescription };