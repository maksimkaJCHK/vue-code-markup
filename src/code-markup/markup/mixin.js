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
    }
  },
  computed: {
    className() {
      return [
        this.classComp,
        this.lineThrough ? 'code-markup_line-through' : '',
        this.bold ? 'code-markup_bold' : ''
      ];
    }
  }
}

export default mixin;