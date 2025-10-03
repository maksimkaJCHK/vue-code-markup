import { ref, onBeforeUnmount } from 'vue';

import copyCode from './copyCode.js';

const useCopy = (code) => {
  const isCopy = ref(false);

  let timerId;
  const resetIsCopy = () => timerId = setTimeout(() => isCopy.value = false, 5_000);
  const clearTimerId = () => { if (timerId) clearTimeout(timerId) };

  const copyCodeProps = () => {
    if (!isCopy.value) {
      try {
        copyCode(code);
        isCopy.value = true;
        resetIsCopy();
      } catch (error) {
        // Пока не придумал как выводить ошибку
      }
    }
  };

  onBeforeUnmount(clearTimerId);

  return {
    isCopy,
    copyCodeProps
  }
}

export default useCopy;