const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const buyoptionsRelativeDirname = '../../runtime/db/buyoptions';
const buyoptionsAbsoluteDirname = path.join(__dirname, buyoptionsRelativeDirname);
const buyoptionsBasenames = fs.readdirSync(buyoptionsAbsoluteDirname);
const buyoptions = buyoptionsBasenames.map(function (e) {
  var pathname = path.join(buyoptionsAbsoluteDirname, e);
  var buyoption = require(pathname);
  return buyoption;
});




var getAllBuyoptions = function () {
  return _.cloneDeep(buyoptions);
};


var getBuyoptionById = function (id) {
  var clonedBuyoptions = _.cloneDeep(buyoptions);
  var filteredBuyoptions = clonedBuyoptions.filter(function (e) {
    return (e.id == id);
  });

  var buyoption;
  if (filteredBuyoptions.length == 0) {
    buyoption = null;
  } else {
    buyoption = filteredBuyoptions[0];
  }

  return buyoption;
};




exports.getAllBuyoptions = getAllBuyoptions;
exports.getBuyoptionById = getBuyoptionById;
