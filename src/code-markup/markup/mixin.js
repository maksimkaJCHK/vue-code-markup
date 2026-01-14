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
        {
          'code-markup_line-through': this.lineThrough,
          'code-markup_bold': this.bold 
        }
      ];
    }
  }
}

export default mixin;