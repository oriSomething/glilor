import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('kleid-pattern', 'KleidPatternComponent', {
  needs: [
    'component:kleid-container',
    'component:kleid-item'
  ]
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
