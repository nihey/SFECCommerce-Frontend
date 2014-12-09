import Ember from 'ember';


export default Ember.Route.extend({

    setupController: function(controller) {
        var cart = JSON.parse(localStorage['cart']) || [];
        controller.set('cart', cart);
        controller.update_total();
    },
});
