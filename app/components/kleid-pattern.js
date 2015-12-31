/* global punycode */
import Ember from 'ember';
const { computed } = Ember;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  /** Setup properties */
  tagName: 'section',


  /** Properties */
  /** @type {String} */
  text: '',
  /** @type {String} */
  containerClass: '',


  /** Computed properties */
  /** @type {Number} The text length */
  textLength: function() {
    return punycode.ucs2.decode(this.get('text')).length;
  }.property('text'),
  /** @type {Array of String} */
  characters: function() {
    let charCodes = Ember.A(punycode.ucs2.decode(this.get('text'))),
      len = charCodes.length,
      pattern = Ember.A([]);

    for (let i = 0; i < len; i++) {
      let row = charCodes.slice(len - i, len)
        .concat( charCodes.slice(0, (len - i)) );

      pattern.pushObjects(row);
    }

    return pattern.map(charCode => punycode.ucs2.encode([charCode]));
  }.property('text'),
  /** @type {String} `style` attribute to every single letter */
  charactersStyle: computed('textLength', function() {
    let diveder = this.get('textLength'),
      precentage = 100 / diveder;

    return htmlSafe(`width: ${precentage}%; height: ${precentage}%;`);
  })
});
