const mixin = {
  props: {
    code: {
      type: String,
      default: ''
    },
    lineThrough: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    nonBold: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        this.classComp,
        'code-markup__item',
        {
          'code-markup_line-through': this.lineThrough,
          'code-markup_bold': this.bold,
          'code-markup_normal-text': this.nonBold,
          'code-markup_inactive': this.inactive
        }
      ];
    }
  }
}

export default mixin;