<template>
  <div class="code-markup">
    <div
      v-if="props.header.length > 0"
      class="code-markup-header"
    >
      {{ props.header }}
    </div>

    <div class="code-markup-body">
      <div class="code-markup-wrap">
        <code-fake-line>
          <code-icon @click="copyCodeProps" />
        </code-fake-line>

        <slot></slot>

        <code-line>
          <mu-tag code="<template>" />
        </code-line>

        <code-line>
          <mu-tag code="</template>" />
        </code-line>

        <code-line />

        <code-line>
          <mu-tag code="<script " />
          setup
          <mu-tag code=">" />
        </code-line>

        <code-line level2>
          <mu-import code="import" />
          { RouterView }
          <mu-from code="from " />
          <mu-text code="'vue-router'" />;
        </code-line>

        <code-line />

        <code-line level-2>
          <mu-key-words code="const" /> <mu-variable code="book" /> = {
        </code-line>
        <code-line level-3>
          <mu-key code="title" />: <mu-text code='Война и мир' />,
        </code-line>
        <code-line level-3>
          <mu-key code="author" />: <mu-text code='Лев Толстой' />,
        </code-line>
        <code-line level-3>
          <mu-key code="pages" />: <mu-number code='1274' />,
        </code-line>
        <code-line level-3>
          <mu-key code="isFinished" />: <mu-key-words code='true' />,
        </code-line>
        <code-line level-3>
          <mu-key code="usersReading" />: <mu-number code='[1946, 1293, 7743]' />,
        </code-line>

        <code-line>
          <mu-tag code="</script>" />
        </code-line>
      </div>
    </div>
  </div>
</template>

<script setup>
  import copyCode from './copyCode';
  import CodeIcon from './components/CodeIcon.vue';

  import CodeFakeLine from './components/CodeFakeLine.vue';
  import CodeLine from './components/CodeLine.vue';

  import MuTag from './markup/MuTag.vue';
  import MuImport from './markup/MuImport.vue';
  import MuFrom from './markup/MuFrom.vue';
  import MuText from './markup/MuText.vue';
  import MuKey from './markup/MuKey.vue';
  import MuKeyWords from './markup/MuKeyWords.vue';
  import MuVariable from './markup/MuVariable.vue';
  import MuNumber from './markup/MuNumber.vue';

  const props = defineProps({
    header: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Object],
      default: ''
    }
  });

  const copyCodeProps = () => copyCode(props.code);

  // Потом удалить

  const book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    pages: 1274,
    isFinished: true,
    usersReading: [1946, 1293, 7743]
  }
</script>

<style lang="scss">
  :root {
    --cm-bg: #212122;
    --cm-border-radius: 5px;

    // Шрифт
    --cm-text-font-weight: normal;
    --cm-text-font-size: 1em;
    --cm-text-font-family: inherit;
    --cm-text-line-height: 1.4;

    // Иконка копировать текст
    --cm-icon-color: #fff;

    // Заголовок
    --cm-header-padding: .5em 1em;
    --cm-height-font-size: 1em;
    --cm-height-font-weight: normal;

    // Цвета
    $color-1: #ffc661;
    $color-2: #647f54;
    $color-3: #cc7832;
    $color-4: #9876aa;
    $color-5: #d4d4c9;
    $color-6: #6897bb;

    // Цвета текста по умолчани.
    --cm-main-color: #a9b7c6;

    // Цвет заголовка
    --cm-header-color: #{$color-1};

    // Цвет для тегов
    --cm-tag-color: #{$color-1};

    // Цвета для элементов внутри script
    --cm-import-color: #{$color-3};
    --cm-from-color: #{$color-3};
    --cm-text-color: #{$color-2};
    --cm-key-color: #{$color-4};
    --cm-key-words-color: #{$color-3};
    --cm-variable-color: #{$color-4};
    --cm-number-color: #{$color-6};
  }

  .code-markup {
    border-radius: var(--cm-border-radius);
    background: var(--cm-bg);
    color: var(--cm-main-color);
    overflow: auto;
    font-weight: var(--cm-text-font-weight);
    font-size: var(--cm-text-font-size);
    font-family: var(--cm-text-font-family);
    line-height: var(--cm-text-line-height);

    &-header {
      padding: var(--cm-header-padding);
      color: var(--cm-header-color);
      border-bottom: 1px solid grey;
      font-size: var(--cm-height-font-size);
      font-weight: var(--cm-height-font-weight);
    }

    &-body {
      position: relative;
      min-height: 2em;
    }

    &-wrap {
      width: 100%;
      display: table;
      counter-reset: count;
    }
  }
</style>
