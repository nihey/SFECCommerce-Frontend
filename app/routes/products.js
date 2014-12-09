import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Route.extend({

    setupController: function(controller, model) {
        SFECUtils.ajax({
            type: 'GET',
            data: {name: model.search},
            url: SFECENV.APP.host + '/products',
            success: function(data) {
                controller.set('products', data);
            },
        });
    },
});
