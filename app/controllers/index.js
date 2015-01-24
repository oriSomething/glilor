import Ember from 'ember';
import ENV from '../config/environment';
const {
  DEBOUNCE_UI,
  SELECTED_FAMILY,
  T_MAX_LENGTH,
  FAMILIES,
  FAMILIES_LABEL,
  DEFAULT_T
} = ENV.APP;

export default Ember.Controller.extend({
  /** Setup properties */
  queryParams: ['t', 'f'],


  /** Properties */
  /** @type {Number} used by <INPUT> */
  tMaxLength: T_MAX_LENGTH,
  /** @type {String} Default text for kaleidoscope */
  t: DEFAULT_T,
  /** @type {String} Default font for kaleidoscope */
  f: FAMILIES[SELECTED_FAMILY],
  /** @type {Boolean} Is controls visible? */
  areControlsVisible: true,


  /** Computed properties */
  /** @type {String} `t` of TextField */
  text: Ember.computed.oneWay('t'),
  /** @type {Array of String} Used for {{view 'select'}} the families id and labels */
  families: function() {
    return FAMILIES.map((v, i) => Ember.A([FAMILIES[i], FAMILIES_LABEL[i]]));
  }.property(),


  /** Events */
  /** Validation to `t` query parameter by `test` property */
  textDidChange: function() {
    let text = this.get('text');

    if (text.length > T_MAX_LENGTH) {
      text = text.substr(0, T_MAX_LENGTH);
      this.set('text', text);
    }

    Ember.run.debounce(this, this.updateTQueryParam, DEBOUNCE_UI, false);
  }.observes('text').on('init'),


  /** Functions */
  updateTQueryParam() {
    Ember.run.scheduleOnce('render', this, function() {
      let text = this.get('text');

      requestAnimationFrame(Ember.run.bind(this, this.set, 't', text));
    });
  },


  /** Actions */
  actions: {
    toggleProperty(prop) {
      this.toggleProperty(prop);
    }
  }
});
