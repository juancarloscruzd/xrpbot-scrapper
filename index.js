const request = require('request');

request('https://www.xrptipbot.com/json/feed', function (error, response, body) {
  const parsedBody = JSON.parse(body);
  const goodInformation = parsedBody.feed.map((item) => {
    return ({
      moment: item.moment,
      type: item.tip,
      xrp: item.xrp,
      network: item.network,
      user: item.user,
    });
  })

  console.log(goodInformation);
});
