import { computed } from 'vue';

const useProps = (props, text) => {
  const lineThroughClass = computed(() => {
    if (props.lineThrough) return 'code-markup_line-through'

    return '';
  });

  const className = [text, lineThroughClass.value];

  return {
    className
  }
}

export default useProps;