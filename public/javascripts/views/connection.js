define(['backbone', 'text!templates/connection.html' ],function(Backbone, connectionTemplate){

  var ConnectionView = Backbone.View.extend({
    template:  _.template(connectionTemplate),

    initialize: function(){
      this.render();
    },

    render: function(){
      var id = parseInt($('.message').data('id'));
      var user = this.collection;

      var fb_id = parseInt(user["facebook_id"]);
      user["name"] = fb_id === id ? "You" : user["name"];
      this.$el.append(this.template(user));
    }
  });

  return ConnectionView;

});
