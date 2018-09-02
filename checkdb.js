var r = require('rethinkdb');

var checkDuplicates = require('./index.js');

//checkDuplicates('Buy MUT Coins', '20.00', '19.50', '20.00');

r.connect( {host: 'localhost', port: 28015, db: 'CoinPrices'}, function(err, conn) {
  if (err) throw err;
  connection = conn;
})
.then(value => {
  r.table('websites').run(connection, (err, cursor) => {
    if (err) throw err;
    cursor.toArray((err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    })
  })
})