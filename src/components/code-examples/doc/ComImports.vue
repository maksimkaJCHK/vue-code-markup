<template>
  <code-markup
    :code="code"
    :key="code.slice(0, 10)"
    :line-count="props.lineCount"
    v-bind="props.codeParam"
  >
    <template #header>
      <span
        class="tab"
        :class="{ isActive: isImport }"
        @click="cImport"
      >
        {{ nameTabs[0] }}
      </span>
      |
      <span
        class="tab"
        :class="{ isActive: isOutput }"
        @click="cOutput"
      >
        {{ nameTabs[1] }}
      </span>
    </template>

    <template #default>
      <template v-if="isImport">
        <template-block>

          <code-line level-2>
            <mu-tag code="<code-markup>" />
          </code-line>

          <slot name="code" />

          <code-line level-2>
            <mu-tag code="</code-markup>" />
          </code-line>

        </template-block>

        <code-line />

        <script-block>

          <code-line level-2>
            <mu-key-words code="import" />
            <mu-type code=" { " />
          </code-line>

          <code-line level-3>
            <mu-type code="CodeMarkup," />
          </code-line>

          <code-line level-3>
            <mu-type code="CodeLine," />
          </code-line>

          <code-line
            v-for="item in props.compArr"
            :key="item"
            level-3
            new
          >
            <mu-type :code="`${item},`" />
          </code-line>

          <code-line level-2>
            <mu-type code=" } " />
            <mu-key-words code="from" />
            <mu-text code=" 'vue-code-markup'" />
            <mu-type code=";" />
          </code-line>

          <code-line level-2>
            <mu-key-words code="import" />
            <mu-text code=" 'vue-code-markup/lib/style.css'" />
            <mu-type code=";" />
          </code-line>

        </script-block>
      </template>
      <template v-if="isOutput">
        <slot name="output" />
      </template>
    </template>
  </code-markup>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
  import ScriptBlock from '@/components/blocks/ScriptBlock.vue';

  const activeTab = ref('import');

  const cOutput = () => activeTab.value = "output";
  const cImport= () => activeTab.value = "import";

  const props = defineProps([
    'codeParam',
    'compArr',
    'isRus',
    'lineCount',
    'codeImport',
    'codeOutput'
  ]);

  const nameTabs = computed(() => {
    if (props.isRus) return ['Подключение', 'Вывод'];

    return ['Import ','Output'];
  });

  const isImport = computed(() => activeTab.value === 'import');
  const isOutput = computed(() => activeTab.value === 'output');

  const code = computed(() => {
    if (isImport.value) return props.codeImport;

    return props.codeOutput;
  });
</script>

<style lang="scss" scoped>
  .tab {
    cursor: pointer;
    user-select: none;
  }

  .isActive {
    color: var(--cm-key-words-color);
  }
</style>