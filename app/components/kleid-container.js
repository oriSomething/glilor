/* global $ */
import Ember from 'ember';
import ENV from '../config/environment';
const { LETTER_SIZE_VUINT, DEBOUNCE_RESIZE_UI } = ENV.APP;
const $window = $(window);

export default Ember.Component.extend({
  /** Setup properties */
  attributeBindings: ['style'],
  classNames: ['kleid'],


  /** Properties */
  /** @type {Number} Component width */
  width: 0,
  /** @type {Number} Component height */
  height: 0,
  /** @type {Number} The number of letters in the kleid text */
  count: 1,


  /** Computed properties */
  /** @type {String} */
  style: function() {
    let { width, height, count } = this.getProperties('count', 'width', 'height'),
      unit = width > height ? 'vh' : 'vw';

    return `font-size: ${LETTER_SIZE_VUINT / count}${unit}`;
  }.property('count', 'width', 'height'),
  /** @type {Number} */
  frameSize: function() {
    let { width, height } = this.getProperties('width', 'height');

    return Math.min(width, height);
  }.property('width', 'height'),
  /** @type {String} */
  frameStyle: function() {
    let size = this.get('frameSize');

    return `width: ${size}px; height: ${size}px;`;
  }.property('frameSize'),


  /** Events */
  didInsertElement() {
    let elementId = this.get('elementId');
    $window.on(`resize.ComponentCustom_${elementId}`, Ember.run.bind(this, this.windowDidResize));
  },

  willClearRender() {
    let elementId = this.get('elementId');
    $window.off(`resize.ComponentCustom_${elementId}`);
  },

  windowDidResize: function() {
    Ember.run.debounce(this, this.computeSizeOnce, DEBOUNCE_RESIZE_UI);
  }.on('didInsertElement'),


  /** Functions */
  /** Calls `computeSize` only once after render */
  computeSizeOnce() {
    Ember.run.scheduleOnce('afterRender', this, this.computeSize);
  },
  /** Set the `width` and `height` properties to match component element CSS size */
  computeSize() {
    let rect = this.element.getBoundingClientRect(),
      { width, height } = this.getProperties('width', 'height'),
      newWidth = (rect.width | 0),
      newHeight = (rect.height | 0);

    /** If equals do nothing */
    if (width === newWidth && height === newHeight) { return; }

    this.setProperties({
      width: newWidth,
      height: newHeight
    });
  }
});
