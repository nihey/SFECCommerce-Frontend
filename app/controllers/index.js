import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        add_cart: function(product) {
            if (product.is_available) {
                localStorage['cart'] = localStorage['cart'] || '[]';
                var cart = JSON.parse(localStorage['cart']);
                cart.push(product);
                localStorage['cart'] = JSON.stringify(cart);

                // Notify the user
                Ember.$('#add-notification').show();
                setTimeout(function() {
                  Ember.$('#add-notification').hide();
                }, 500);
            }
        },
    },
});
