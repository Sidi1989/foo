const buylists = require('../../runtime/db/buylists.json');




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

  return buylists;
};




exports.getBuylistById = getBuyistById;
