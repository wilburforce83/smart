var global = require("../globals");

const { parse } = require("rss-to-json");

module.exports = {
  checkWeather: function () {
    console.log("Checking the Met Office weather RSS feed...")(
      // async await
      async () => {
        var rssJSON = await parse(global.rss);

        console.log(JSON.stringify(rssJSON, null, 3));
      }
    )();
  },
};
