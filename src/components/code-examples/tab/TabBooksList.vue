<template>
  <code-markup :code="code">
    <template #header>
      <span
        :class="isActiveTemplate"
        @click="cNameComponent('template')"
      >Template</span>
      | <span
          :class="isActiveScripts"
          @click="cNameComponent('script')"
      >Script</span>
      | <span
          :class="isActiveStyle"
          @click="cNameComponent('style')"
        >Styles</span>
    </template>

    <template #default>
      <component :is="rComponent" />
    </template>
  </code-markup>
</template>

<script setup>
  import { ref, computed } from 'vue';

  //import CodeMarkup from '@/code-markup/codemarkup.vue';

  import TemplateSection from './TemplateSection.vue';
  import ScriptSection from './ScriptSection.vue';
  import StyleSection from './StyleSection.vue';

  const nameComponent = ref('template');

  const cNameComponent = (name) => nameComponent.value = name;

  const isActiveTemplate = computed(() => (['tab', { isActive: nameComponent.value === 'template' }]));
  const isActiveScripts = computed(() => (['tab', { isActive: nameComponent.value === 'script' }]));
  const isActiveStyle = computed(() => (['tab', { isActive: nameComponent.value === 'style' }]));

  const rComponent = computed(() => {
    if (nameComponent.value === 'template') return TemplateSection;
    if (nameComponent.value === 'script') return ScriptSection;
    if (nameComponent.value === 'style') return StyleSection;

    return TemplateSection;
  });

  const code = `<template>
  <div
    id="books-list"
    class="books-list"
  >
    <div
      v-for="book in books"
      :key=" book. id"
      class="books-list-item"
    >
      <h3>{{ book.title }}</h3>
      <div class="author">
        {{ book.author }}
      </div>
      <div class="pages">
        {{ book.pages }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Пример комментария
  const books = ref([
    {
      id: 1,
      title: "Война и мир",
      author: "Лев Толстой",
      pages: 1274,
      isFinished: true,
      usersReading: [1946, 1293, 7743],
    }, {
      id: 2,
      title: "Записки врача",
      author: "Викентий Вересаев",
      pages: 360,
      isFinished: false,
      usersReading: [1922, 1280, 5378, 9576, 10636],
    },
  ]);
</${'scrip'}t>

<style lang="scss" scoped>
  #books-list {
    margin: 1em 0 2.5em;
  }

  .books-list {
    line-height: 1.2;

    h3 {
      font-size: 1.2em;
      margin: .4em 0 .3em;
    }

    &-item {
      margin: 1.5em 0 ;
    }
  }
</style>`;
</script>

<style lang="scss" scoped>
  .tab {
    cursor: pointer;
  }

  .isActive {
    color: var(--cm-key-words-color);
    font-weight: bold;
  }
</style>