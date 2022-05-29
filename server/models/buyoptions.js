const _ = require('lodash');
const buyoptions = require('../../runtime/db/buyoptions.json');




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
  };

  return buyoption;
};




exports.getAllBuyoptions = getAllBuyoptions;
exports.getBuyoptionById = getBuyoptionById;
