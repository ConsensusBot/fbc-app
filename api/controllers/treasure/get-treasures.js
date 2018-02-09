
/**
 * TreasureController.getTreasures
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
      lastSeen: ,
      claimed: false
    }
*/

module.exports = function(req, res) {

  return res.json([
    {
      postId: '2957',
      siteName: 'Subway',
      walletAddress: 'bitcoincash: 987rfhdhdjefnsNEURHEHIOUE482785YU',
      walletValue: 500,
      walletValueUSD: 10.25,
      lastSeen: 'Fri, 09 Feb 2018 00:07:42 GMT',
      claimed: false
    },
    {
      postId: '2958',
      siteName: 'Staples',
      walletAddress: 'bitcoincash: 9D8FHDUSFGHWIHEIJDCJQIDFUCV97FDWS',
      walletValue: 1000,
      walletValueUSD: 20.5,
      lastSeen: 'Fri, 09 Feb 2018 00:07:42 GMT',
      claimed: false
    },
    {
      postId: '2960',
      siteName: 'Panera Bread',
      walletAddress: 'bitcoincash: 93858091809ncNDBFCBHOIDnisnuHdewerw',
      walletValue: 2000,
      walletValueUSD: 41,
      lastSeen: 'Fri, 09 Feb 2018 00:07:42 GMT',
      claimed: false
    }
  ]);

};
