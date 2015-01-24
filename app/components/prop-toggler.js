import Ember from 'ember';

export default Ember.Component.extend({
  /** Setup properties */
  attributeBindings: ['role'],
  /** @type {String} Aria role */
  role: 'button',
  /** @type {String} Property to send action to */
  property: '',


  /** Events */
  /** DOM Click event */
  click() {
    let property = this.get('property');

    if (Ember.isPresent(property)) {
      this.sendAction('action', property);
    }
  }
});
