Package.describe({
  name: 'webobservatory:accounts-wo',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'Login service for Southampton web observatory accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/webobservatory/accounts-wo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@0.9.0")
  api.use(['underscore', 'random','templating'],'client');
  api.use(['accounts-base','aldeed:template-extension','useraccounts:core@1.14.2','useraccounts:iron-routing@1.14.2'], ['client', 'server']);

  //Export Accounts(etc) to packages using this one.
  api.imply(['accounts-base','aldeed:template-extension@4.0.0','useraccounts:core@1.14.2','useraccounts:iron-routing@1.14.2'], ['client', 'server']);

  //Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
  // services and activate template body events if any present.
  api.use(['accounts-oauth','gwendall:body-events@0.1.6'], ['client','server']);

  //Using Web Observatory core OpenID Connect implementation
  api.use('webobservatory:wooidc@0.0.4', ['client','server']);

  api.addFiles(['wooidc_login_button.css','wo_at_social.html','wo_at_social.js'],'client');
  api.addFiles('wooidc.js')

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('webobservatory:accounts-wo');
  api.mainModule('accounts-wo-tests.js');
});
