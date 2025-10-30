import { ref } from 'vue';


const getRandomNumb = (max) => Math.floor(Math.random() * max);

const useId = () => {
  const id = ref('');

  const generateId = () => {
    id.value = `id-${getRandomNumb(100_000_000_000)}`;
  };

  generateId();

  return { id };
}

export default useId;