import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        update() {
            this.get('model.settings').forEach((setting) => setting.save());
        }
    }
});
