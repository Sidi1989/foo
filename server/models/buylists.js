const _ = require('lodash');
const buylists = require('../../runtime/db/buylists.json');




var getAllBuylists = function () {
  return _.cloneDeep(buylists);
};


var getBuylistById = function (id) {
  var clonedBuylists = _.cloneDeep(buylists);
  var filteredBuylists = clonedBuylists.filter(function (e) {
    return (e.id == id);
  });

  var buylist;
  if (filteredBuylists.length == 0) {
    buylist = null;
  } else {
    buylist = filteredBuylists[0];
  };

  return buylist;
};




exports.getAllBuylists = getAllBuylists;
exports.getBuylistById = getBuyistById;
