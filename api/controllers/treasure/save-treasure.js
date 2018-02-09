
/**
 * TreasureController.save
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/*
    {
      postId: '2958',
      siteName: 'Staples',
      siteDescription: '',
      siteCountry: '',
      siteCity: ''
      siteAddress: '1450 Clark Ave W',
      sitePostcode: '',
      sitePhotos: [],
      geoX:,
      geoY:,
      walletAddress:'',
      walletValue:'',
      walletValueUSD:10,
      lastSeen: ,
      claimed: false
    }

  https://fbc-app.herokuapp.com/treasures/save?siteName=MyFavoriteBookstore&walletAddress=7837489798hdcdsfhbxcbuihfuiwehds
  localhost:1337/treasures/save?siteName=MyFavoriteBookstore&walletAddress=7837489798hdcdsfhbxcbuihfuiwehds
*/

module.exports = function(req, res) {

  var params = req.allParams();

  return res.view('pages/savetreasure', {
    treasure: params
  });

};
