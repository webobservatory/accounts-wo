// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-wo.js.
import { name as packageName } from "meteor/accounts-wo";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-wo - example', function (test) {
  test.equal(packageName, "accounts-wo");
});
