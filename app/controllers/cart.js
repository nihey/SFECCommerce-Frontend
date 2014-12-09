import Ember from 'ember';


export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        remove_item: function(product) {
            this.get('cart').removeObject(product);
            localStorage['cart'] = JSON.stringify(this.get('cart'));
            this.update_total();
        },
        confirm_purchase: function() {
            var user = this.get('controllers.application.user');
            if (!user) {
                Ember.$('#login-modal').modal('show');
                return;
            }
            localStorage['cart'] = '[]';
            this.transitionToRoute('/purchase');
        },
    },

    update_total: function() {
        var cart = this.get('cart');
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += parseFloat(cart[i].price);
        }
        this.set('total', total);
        if (cart.length === 0) {
            this.set('valid_purchase', false);
            return;
        }
        this.set('valid_purchase', true);
    },
});
