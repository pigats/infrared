import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    ip: DS.attr('string'),
    type: DS.belongsTo('deviceType'),
    settings: DS.hasMany('settings')
});
