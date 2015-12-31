import Ember from 'ember';
const { computed } = Ember;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  /** Setup properties */
  classNames: ['kleid-item'],
  attributeBindings: ['style'],

  _style: htmlSafe(''),

  style: computed({
    get() {
      return this.get('_style');
    },

    set(key, value) {
      const _style = htmlSafe(value);
      this.set('_style', _style);
      return _style;
    }
  })
});
