var global = require("../globals");

const { parse } = require("rss-to-json");

var rssResults;
var yellowWarnings;

module.exports = {
  checkWeather: function () {
    console.log("Checking the Met Office weather RSS feed...");
    // async await
    console.log("from ... " + global.rss);

    parse(global.rss).then((rss) => {
      console.log("done...");

      rssResults = redux(rss.items, ["description"]);
      //console.log(rssResults);
      let firstParse = searchFor(rssResults, global.location);
      let secondParse = searchFor(firstParse, global.warnings);
      trigger(secondParse);
    });
  },
};

const redux = (array, search) =>
  array.map((o) =>
    search.reduce((acc, curr) => {
      acc[curr] = o[curr];
      return acc;
    }, {})
  );

function searchFor(arr, parameter) {
  var results = [];

  var toSearch = parameter;

  for (var i = 0; i < arr.length; i++) {
    for (key in arr[i]) {
      if (arr[i][key].indexOf(toSearch) != -1) {
        results.push(arr[i]);
      }
    }
  }
  return(results);
 
}


function trigger(results) {

  if (results.length === 0) {
    console.log(
      "No Adverse weather events for " +
        global.location +
        "...waiting to check again..."
    );
  } else {
    console.log("WARNING!!!!");
    console.log(results[0]);

    // Add here your triggers for the raspberry pi relay trigger
    console.log(
      "Attenuation Valve Triggered... valve will remain open until warning has passed..."
    );
  }



}
