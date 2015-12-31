/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'glilor',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      }
    },

    APP: {
      DEBOUNCE_UI: 240,
      DEBOUNCE_RESIZE_UI: 60,
      T_MAX_LENGTH: 12,
      SELECTED_FAMILY: 7,
      FAMILIES: ['atlas', 'almoni', 'almoni-tzar', 'ambivalenti', 'ambivalenti-tzar', 'asimon', 'barlev', 'mugrabi', 'museum', 'mixtape', 'mekomi', 'noyland', 'omes', 'stanga', 'synopsis', 'spectrum', 'poeti', 'paamon', 'frankruehl', 'caravan', 'rivka'],
      FAMILIES_LABEL: ['אטלס', 'אלמוני דו־לשוני', 'אלמוני צר', 'אמביוולנטי', 'אמביוולנטי צר', 'אסימון', 'בר־לב', 'מוגרבי', 'מוזאון', 'מיקסטייפ', 'מקומי', 'נוילנד', 'עומס', 'סטנגה', 'סינופסיס', 'ספקטרום', 'פואטי', 'פעמון', 'פרנק ריהל אאא', 'קרוואן', 'רבקה באו'],
      FAMILIES_TEST_STRING: 'אבגדה',
      DEFAULT_T: 'א',
      LETTER_SIZE_VUINT: 30
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
