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

    register: function() {
      this.set('register_error', false);
      this.set('password_error', false);

      if (this.get('register_password') !== this.get('register_cpassword')) {
        this.set('password_error', true);
        return;
      }

      var data = {
        name: this.get('register_name'),
        email: this.get('register_email'),
        password: this.get('register_password'),
      };

      SFECUtils.ajax({
        type: 'POST',
        data: data,
        url: SFECENV.APP.host + '/register',
        success: function(data) {
          this.set('user', JSON.parse(data));
          Ember.$('#register-modal').modal('hide');
        },
        error: function() {
          this.set('register_error', true);
        },
        context: this,
      });
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
      this.set('register_error', false);
      this.set('password_error', false);
      this.set('login_fail', false);
      this.set('user', false);
      console.log('Foobar');
      SFECUtils.ajax({
          type: 'GET',
          url: SFECENV.APP.host + '/login_check',
          success: function(data) {
              console.log(JSON.parse(data));
              this.set('user', JSON.parse(data));
          },
          context: this,
      });
  },
});
