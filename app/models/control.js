import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    type: DS.belongsTo('controlType'),
    values: DS.attr({ defaultValue: () => [] })
});
