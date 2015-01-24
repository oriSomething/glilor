import Ember from 'ember';

export default Ember.Component.extend({
  /** Setup properties */
  tagName: 'a',
  attributeBindings: ['href'],


  /** Computed properties */
  /** @type {String} */
  href: function() {
    let { t, f } = this.getProperties('t', 'f'),
      link = `http://glilor.alefalefalef.co.il/?t=${encodeURIComponent(t)}&f=${encodeURIComponent(f)}`,
      linkEscaped = encodeURIComponent(link);

    return `http://www.facebook.com/sharer.php?&u=${linkEscaped}&redirect_uri=${linkEscaped}`;
  }.property('t', 'f')
});
