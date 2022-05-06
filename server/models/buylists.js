const _ = require('lodash');
const buylists = require('../../runtime/db/buylists.json');




var getAllBuylists = function () {
  return _.cloneDeep(buylists);
};


var getBuylistById = function (id) {
  var filteredBuylists = buylists.filter(function (e) {
    return (e.id == id);
  });

  var buylist;
  if (filteredBuylists.length == 0) {
    buylist = null;
  } else {
    buylist = filteredBuylists[0];
  };

  return _.cloneDeep(buylist);
};




exports.getAllBuylists = getAllBuylists;
exports.getBuylistById = getBuyistById;
