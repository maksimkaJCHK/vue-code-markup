import { ref, onBeforeUnmount } from 'vue';

import copyCode from './copyCode.js';

const useCopy = (code) => {
  const isCopy = ref(false);
  const isError = ref(false);

  let timerId;
  const resetIsCopy = () => timerId = setTimeout(() => isCopy.value = false, 5_000);
  const resetIsError = () => timerId = setTimeout(() => isError.value = false, 5_000);

  const clearTimerId = () => { if (timerId) clearTimeout(timerId) };

  const copyCodeProps = async () => {
    if (!isCopy.value) {
      try {
        await copyCode(code);

        isCopy.value = true;
        resetIsCopy();
      } catch (error) {
        isError.value = true;
        resetIsError();
      }
    }
  };

  onBeforeUnmount(clearTimerId);

  return {
    isCopy,
    isError,
    copyCode: copyCodeProps
  }
}

export default useCopy;