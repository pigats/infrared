import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('devices', function() {
    this.route('new');
    this.route('show', { path: ':device_id' });

    this.route('settings', { path: ':device_id/settings' }, function() {
        this.route('edit');
    });
  });
});

export default Router;
