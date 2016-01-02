import Ember from 'ember';
import config from '../config/environment';
const { BASE_SHARE_URL } = config.APP;

export default Ember.Component.extend({
  /** Setup properties */
  tagName: 'a',
  attributeBindings: ['href'],


  /** Computed properties */
  /** @type {String} */
  href: function() {
    let { t, f } = this.getProperties('t', 'f'),
      link = `${BASE_SHARE_URL}?t=${encodeURIComponent(t)}&f=${encodeURIComponent(f)}`,
      linkEscaped = encodeURIComponent(link);

    return `http://www.facebook.com/sharer.php?&u=${linkEscaped}&redirect_uri=${linkEscaped}`;
  }.property('t', 'f')
});
