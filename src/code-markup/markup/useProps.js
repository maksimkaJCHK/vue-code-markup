const useProps = () => {
  const props = defineProps({
    code: {
      type: String,
      default: ''
    },
    lineThrough: {
      type: Boolean,
      default: false
    },
  });

  return {
    props
  }
}

export default useProps;