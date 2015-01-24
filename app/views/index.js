import Ember from 'ember';

export default Ember.View.extend({
  /** Setup properties */
  classNames: ['fs', 'flex'],
  classNameBindings: ['fClassName'],


  /** Properties */
  /** @type {String} Reference to the `f` (font) query parameter */
  f: Ember.computed.readOnly('controller.f'),


  /** Computed properties */
  /** @type {String} `f` CSS class name */
  fClassName: function() {
    let f = this.get('f');

    return `f-${f}`;
  }.property('f')
});
