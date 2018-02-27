const bch = require('bitcoincashjs');

module.exports = function(req, res) {

  var quantity = req.param('quantity');

  if (!quantity) {
    return res.badRequest();
  }

  quantity = Number(quantity);

  if (typeof quantity === NaN) {
    return res.badRequest();
  }

  var wallets = [];

  while (quantity) {

    let onePrivateKey = new bch.PrivateKey();

    wallets.push({
      cashaddress: onePrivateKey.toAddress().toString(bch.Address.CashAddrFormat),
      privatekey:  onePrivateKey.toString(),
      publickey: onePrivateKey.toPublicKey().toString()
    });

    quantity--;

  }

  return res.ok(wallets);

};
