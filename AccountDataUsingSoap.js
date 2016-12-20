var jsforce = require('jsforce');
var conn = new jsforce.Connection({
	loginUrl : 'https://test.salesforce.com'
});
conn.login('sesa201771@bridge-fo.com.devmajbfo', 'Hari@123', function(err, res) {
  if (err) { return console.error(err); }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});