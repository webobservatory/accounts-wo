Package.describe({
  name: 'devasena:accounts-wo',
  version: '0.0.12',
  // Brief, one-line summary of the package.
  summary: 'Login service for Southampton web observatory accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Southampton-RSG/accounts-wo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.1', ['client', 'server']);
  //Export Accounts(etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.7', ['client','server']);
  api.use('devasena:wooidc@0.0.6', ['client','server']);

  api.addFiles('wo_login_button.css','client');
  api.addFiles('wo.js')

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('devasena:accounts-wo');
  api.mainModule('accounts-wo-tests.js');
});
