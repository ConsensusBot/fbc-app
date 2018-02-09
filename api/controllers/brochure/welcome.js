
/**
 * BrochureController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = function(req, res) {

  if (req.session.user && req.session.user.isSuperAdmin) {
    return res.redirect('/system');
  }
  return res.redirect('https://findbitcoin.cash/');

};

