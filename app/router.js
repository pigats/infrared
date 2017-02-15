import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('devices', function() {
    this.route('new');
    this.route('show', { path: ':id' });

    this.route('settings', { path: '' }, function() {
        this.route('edit', { path: ':id/edit' });
    });
  });
});

export default Router;
