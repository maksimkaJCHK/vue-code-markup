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
        <code-markup :is-header="false">
          <code-line>
            <mu-comment code="<!-- Below is a line for displaying input parameters. -->" />
          </code-line>
          <code-line>
            Example of the code-line component for displaying input parameters
          </code-line>
          <code-line>
            <mu-comment code="<!-- Above is a line for displaying input parameters. -->" />
          </code-line>
        </code-markup>
      </template>
      <template #content></template>
    </settings-doc>
  </div>
</template>

<script setup>
  import SettingsDoc from '@/components/SettingsDoc.vue';
  import CodeLineExample from '@/components/code-examples/doc/CodeLineExample.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>