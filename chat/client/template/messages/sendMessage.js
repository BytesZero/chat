/**
 * Created by fitark on 15-3-20.
 */
Template.sendMessage.events({
   'click button':function(){
       var message = $(".message");
       var formMessage = {
           name:Meteor.user().username,
           message: message.val(),
           submitted: new Date()
       };
       message.val("");
       messages.insert(formMessage)
   }
});
