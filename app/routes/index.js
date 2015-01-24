/* global WebFont */
import Ember from 'ember';
import ENV from '../config/environment';
const { Promise } =  Ember.RSVP;
const { FAMILIES, FAMILIES_TEST_STRING } = ENV.APP;

export default Ember.Route.extend({
  queryParams: {
    /** @type {Object} The text for kaleidoscope */
    t: { refreshModel: false },
    /** @type {Object} The font of kaleidoscope */
    f: { refreshModel: false },
  },

  beforeModel() {
    /** @type {Object of String} The JSON of the test string object to the families */
    let familiesTestStrings = {};
    FAMILIES.forEach(family => familiesTestStrings[family] = FAMILIES_TEST_STRING);

    return new Promise(function fontLoader(resolve, reject) {
      WebFont.load({
        custom: {
          families: FAMILIES,
          urls: [],
          testStrings: familiesTestStrings,
          timeout: 7000
        },
        active: resolve,
        inactive: reject
      });
    });
  }
});
