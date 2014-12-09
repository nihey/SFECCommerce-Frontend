import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Route.extend({

    setupController: function(controller) {
        SFECUtils.ajax({
            type: 'GET',
            url: SFECENV.APP.host + '/users',
            success: function(data) {
                controller.set('users', data);
            },
        });
        SFECUtils.ajax({
            type: 'GET',
            url: SFECENV.APP.host + '/products',
            success: function(data) {
                controller.set('products', data);
            },
        });
    },
});
