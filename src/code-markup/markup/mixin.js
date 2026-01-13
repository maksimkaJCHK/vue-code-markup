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
    lineThroughClass() {
      if (this.lineThrough) return 'code-markup_line-through'

      return '';
    },
    boldClass() {
      if (this.bold) return 'code-markup_bold'

      return '';
    },
    className() {
      return [
        this.classComp,
        this.lineThroughClass,
        this.boldClass
      ];
    }
  }
}

export default mixin;