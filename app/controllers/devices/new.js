import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        create() {
            this.get('store').findRecord('deviceType', +this.get('typeId')).then((type) => {
                this.set('model.device.type', type);
                this.get('model.device').save();
            });
        }
    }
});
