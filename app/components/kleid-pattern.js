import Ember from 'ember';

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
    let text = this.get('text') || '';

    return text.length;
  }.property('text'),
  /** @type {Array of String} */
  characters: function() {
    let text = this.get('text') || '',
      /** Using `length`, but until ES6 support… */
      len = text.length,
      characters = '';

    for (let i = 0; i < len; i++) {
      let row = (text.substr(i * -1) + text.substr(0, (len - i))).substr(0, len);

      characters += row;
    }

    /** The split is wrong, but until ES6 support… */
    return Ember.A(characters.split(''));
  }.property('text'),
  /** @type {String} `style` attribute to every single letter */
  charactersStyle: function() {
    let diveder = this.get('textLength'),
      precentage = 100 / diveder;

    return `width: ${precentage}%; height: ${precentage}%;`;
  }.property('textLength'),
});
