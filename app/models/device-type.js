import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    controls: DS.hasMany('controls')
});
