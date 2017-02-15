import { moduleForModel, test } from 'ember-qunit';

moduleForModel('control-type', 'Unit | Model | control type', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
