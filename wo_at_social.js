//Uses atSocial template from meteor useraccounts bootstrap in place of original atSocial.
Template.woatSocial.replaces("atSocial");

//Global helper to be used to compare OpenID connect providers so as to render the template accordingly.
Template.registerHelper('equals', function(a, b) {

   return a === b;
});
