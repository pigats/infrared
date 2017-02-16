import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        update() {
            this.get('model.settings').forEach((setting) => setting.save());
        },

        destroyDevice(device) {
            if(window.confirm(`Are you sure you want to delete ${device.get('name')}?`)) {
                device.destroyRecord().then(() => this.transitionToRoute('devices.index'));
            }
        }

    }
});
