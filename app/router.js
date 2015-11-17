import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  this.route('offers');
  this.route('newoffer',{path:'/offers/new'});
});

export default Router;
