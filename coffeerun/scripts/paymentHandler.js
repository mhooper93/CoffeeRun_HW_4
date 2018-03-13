// IIEF Payment Module
(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-payment="form"]';

  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function (data) {
    var description = data.title + ' ';
    description += data.username;
    $("#user").text(description);
    $("#Message").modal();
  });
})(window);
