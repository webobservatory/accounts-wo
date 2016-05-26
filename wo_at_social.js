//Uses atSocial template from meteor useraccounts bootstrap in place of original atSocial.
Template.woatSocial.replaces("atSocial");

Template.registerHelper('equals', function(a, b) {

   return a === b;
});
