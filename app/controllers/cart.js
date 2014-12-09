import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

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
        if (total === 0) {
            Ember.$('#confirm-button').attr('disabled', 'disabled');
            return;
        }
        Ember.$('#confirm-button').removeAttr('disabled');
    },
});
