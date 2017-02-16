import DS from 'ember-data';

export default DS.Model.extend({
    control: DS.belongsTo('control'),
    value: DS.attr()
});
