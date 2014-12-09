import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Route.extend({

    setupController: function(controller) {
        var cart = JSON.parse(localStorage['cart']) || [];
        controller.set('cart', cart);
        controller.update_total();
    },
});
