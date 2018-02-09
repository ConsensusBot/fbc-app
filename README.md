# fbc-app

Backend for https://findbitcoin.cash/ 


### Endpoints

##### GET /treasures
Returns a collection containing information for all treasures

Example Response
```
  [
    {
      postId: '2958',
      siteName: 'Staples',
      walletAddress: 'bitcoincash:9D8FHDUSFGHWIHEIJDCJQIDFUCV97FDWS',
      walletValue: 1000,
      walletValueUSD: 20.5,
      lastSeen: 'Fri, 09 Feb 2018 00:07:42 GMT',
      claimed: false
    },
    {
      postId: '2960',
      siteName: 'Panera Bread',
      walletAddress: 'bitcoincash:93858091809ncNDBFCBHOIDnisnuHdewerw',
      walletValue: 2000,
      walletValueUSD: 41,
      lastSeen: 'Fri, 09 Feb 2018 00:07:42 GMT',
      claimed: false
    }
  ]

```

##### GET /treasures/save?siteName=<`some-site-name`>&walletAddress=`<some-wallet-address>`&
Serves a thank you page containing all the info that was saved to the database.  The page redirects to the main site after 8 seconds.

### Useful stuff

+ [https://findbitcoin.cash/](https://findbitcoin.cash/)
+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)


### Version info

This app was originally generated on Thu Feb 08 2018 16:57:17 GMT-0600 (CST) using Sails v1.0.0-46.

<!-- Internally, Sails used [`sails-generate@1.15.5`](https://github.com/balderdashy/sails-generate/tree/v1.15.5/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

