import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Controller.extend({
  actions: {
    logout: function() {
        SFECUtils.ajax({
            type: 'GET',
            url: SFECENV.APP.host + '/logout',
            success: function() {
                this.set('user', false);
            },
            context: this,
        });
    },

    login: function() {
        this.set('login_fail', false);

        var data = {
            email: this.get('email'),
            password: this.get('password'),
        };

        SFECUtils.ajax({
            type: 'POST',
            data: data,
            url: SFECENV.APP.host + '/login',
            success: function(data) {
                this.set('user', JSON.parse(data));
                Ember.$('#login-modal').modal('hide');
            },
            error: function() {
                this.set('login_fail', true);
            },
            context: this,
        });
    },
    search: function() {
        this.search_changed();
    },
  },

  search_changed: function() {
    if (this.get('search')) {
        this.transitionToRoute('/products/' + this.get('search'));
        return;
    }
    this.transitionToRoute('/');
  }.observes('search'),

  initialize: function() {
      this.set('login_fail', false);
      this.set('user', false);
      console.log('Foobar');
      SFECUtils.ajax({
          type: 'GET',
          url: SFECENV.APP.host + '/login_check',
          success: function(data) {
              this.set('user', JSON.parse(data));
          },
          context: this,
      });
  },
});
