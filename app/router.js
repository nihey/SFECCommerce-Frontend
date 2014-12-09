import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('admin', {path: '/admin'});
    this.resource('products', {path: '/products/:search'});
    this.resource('cart', {path: '/cart'});
});

export default Router;
