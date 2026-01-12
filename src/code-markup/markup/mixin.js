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
  },
  computed: {
    lineThroughClass() {
      if (this.lineThrough) return 'code-markup_line-through'

      return '';
    },
    className() {
      return [this.classComp, this.lineThroughClass];
    }
  }
}

export default mixin;