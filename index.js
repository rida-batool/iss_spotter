const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const nextISSTimesInString = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime); //setter nd getters
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
  nextISSTimesInString(passTimes);
});


//testing functions in ISS file
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('72.141.21.244', (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });

//const coordi = { latitude: '49.27670', longitude: '-123.13000' };
// const coordi = { latitude: 'abc', longitude: 'abc' };
// fetchISSFlyOverTimes(coordi, (error, data) => {

//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned response:', data);
// });