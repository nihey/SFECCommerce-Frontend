import Ember from 'ember';

import SFECENV from 'sfec/config/environment';
import SFECUtils from '../utils/sfec';

export default Ember.Controller.extend({
  actions: {
    logout: function() {
        // Logout Stub
    },
    login: function() {
        // Login Stub
    },
    search: function() {
        // Search Stub
        console.log(this.get('search'));
    },
  },
});
