import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Controller.extend({
    actions: {
        remove_item: function(product) {
            this.get('cart').removeObject(product);
            localStorage['cart'] = JSON.stringify(this.get('cart'));
            this.update_total();
        },
    },
    update_total: function() {
        var cart = this.get('cart');
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += parseFloat(cart[i].price);
        }
        this.set('total', total);
    }
});
