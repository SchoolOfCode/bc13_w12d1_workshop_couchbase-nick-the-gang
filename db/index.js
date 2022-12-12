const couchbase = require("couchbase");


async function couchbaseConnect() {
    return couchbase.connect('couchbases://'+process.env.CB_HOST, {
        username: process.env.CB_USERNAME, 
        password: process.env.CB_PASSWORD
  });
} 

module.exports = couchbaseConnect