

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Session.set("words", "");

  Template.screen.helpers({
    words: function () {
      return Session.get("words");
    }
  });

  Template.app.helpers({
    words: function () {
      return Session.get("words");
    }
  });

  Template.app.events({
    'keydown input': function (e) {
      // increment the counter when button is clicked
      var key = String.fromCharCode((96 <= e.keyCode && e.keyCode <= 105)? key-48 : e.keyCode);
      console.log("triggered", key, e.keyCode);

      if (e.keyCode === 13 ){
        console.log("enter key");
      }
      else if (e.keyCode ===8){
        Session.set("words", Session.get("words").slice(0,Session.get("words").length-1));
      }
      else {
      Session.set("words", Session.get("words") + key);
      e.stopPropagation();
      return false;
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
