import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Controller.extend({
    actions: {
        add_cart: function(product) {
            if (product.is_available) {
                localStorage['cart'] = localStorage['cart'] || '[]';
                var cart = JSON.parse(localStorage['cart']);
                cart.push(product);
                localStorage['cart'] = JSON.stringify(cart);
            }
        },
    },
});
