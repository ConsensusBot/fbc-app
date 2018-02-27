const bch = require('bitcoincashjs');
const qr = require('qr-image');

        

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
      cashQr: 'data:image/png;base64,'+new Buffer(qr.imageSync(onePrivateKey.toAddress().toString(bch.Address.CashAddrFormat))).toString('base64'),
      privatekey:  onePrivateKey.toString(),
      // WIF format (compressed)
      privatekeyQR: 'data:image/png;base64,'+new Buffer(qr.imageSync(onePrivateKey.toWIF())).toString('base64'),
      publickey: onePrivateKey.toPublicKey().toString()
    });

    quantity--;

  }

  return res.ok(wallets);

};
