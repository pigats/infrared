import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findRecord('device', this.paramsFor('devices.settings').device_id);
    }
});
