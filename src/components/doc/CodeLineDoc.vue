<template>
  <div class="code-line-doc">
    <template v-if="props.isRus">
      <h2>Компонент code-line</h2>

      <p>
        По сути это линия или строка с кодом. Элементы кода должны находиться в этом компоненте. Подключается он следующим способом:
      </p>

      <code-line-example lang="ru" />

      <p>
        Данный компонент имеет следующие входные параметры:
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>The code-line component</h2>

      <p>
        In fact, this is a line or a line with a code. The code elements must be located in this component. It is connected in the following way:
      </p>

      <code-line-example lang="en" />

      <p>
        This component has the following input parameters:
      </p>
    </template>

    <settings-doc>
      <template #code>
        <code-markup
          :is-header="false"
          v-bind="codeParam"
        >
          <code-line>
            <mu-comment :code="textInEditor[0]" />
          </code-line>
          <code-line
            :new="newParam"
            :active="active"
          >
            {{ textInEditor[1] }}
          </code-line>
          <code-line>
            <mu-comment :code="textInEditor[2]" />
          </code-line>
        </code-markup>
      </template>
      <template #content="{ nameRow }">
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>new</strong> - в Visual Studio Code, когда добавляется новая строка, она отображается с линией
          </p>

          <ui-checkbox
            v-model="newParam"
            value="newParam"
          >
            {{ newParam }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <ui-checkbox
            v-model="active"
            value="active"
          >
            {{ active }}
          </ui-checkbox>
        </div>
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import CodeLineExample from '@/components/code-examples/doc/CodeLineExample.vue';

  import UiCheckbox from '@/UI/UICheckbox.vue';
  import UiSelect from '@/UI/UISelect.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  const newParam = ref(false);
  const active = ref(false);

  const textInEditor = computed(() => {
    if (props.isRus) {
      return [
        '<!-- Ниже приведена строка для отображения входных параметров -->',
        'Пример компонента кодовой строки для отображения входных параметров',
        '<!-- Выше приведена строка для отображения входных параметров -->'
      ]
    }

    return [
      '<!-- Below is a line for displaying input parameters -->',
      'Example of the code-line component for displaying input parameters',
      '<!-- Above is a line for displaying input parameters -->'
    ]
  });
</script>

<style lang="scss" scoped>

</style>