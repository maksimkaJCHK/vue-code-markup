import { ref, watch } from 'vue';
import { cToDefault, cToMonokai } from './themes.js';
import { themeOptions } from '../themeOptions.js';

const useThemes = (parameters) => {
  const theme = ref('darcula');

  const cParameters = (newVal) => {
    if (newVal === 'darcula') cToDefault(parameters);
    if (newVal === 'monokai') cToMonokai(parameters);
  };

  watch(theme, cParameters);

  return {
    theme,
    themeOptions
  }
}

export default useThemes;