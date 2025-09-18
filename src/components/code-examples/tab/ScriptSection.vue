<template>
  <!-- script -->
  <code-line>
    <mu-tag code="<script " />
    <mu-attr code="setup" />
    <mu-tag code=">" />
  </code-line>

  <code-line level2>
    <mu-key-words code="import" />
    { ref }
    <mu-key-words code="from " />
    <mu-text code="'vue'" />;
  </code-line>

  <code-line />

  <code-line level-2>
    <mu-comment code="// Пример комментария" />
  </code-line>
  <code-line level-2>
    <mu-key-words code="const" /> <mu-variable code="books" /> = <mu-key-words code='ref' />([
  </code-line>
  <code-line level-3>
    {
  </code-line>
  <code-line level-4>
    <mu-key code="id" />: <mu-number code='1' />,
  </code-line>
  <code-line level-4>
    <mu-key code="title" />: <mu-text code='"Война и мир"' />,
  </code-line>
  <code-line level-4>
    <mu-key code="author" />: <mu-text code='"Лев Толстой"' />,
  </code-line>
  <code-line level-4>
    <mu-key code="pages" />: <mu-number code='1274' />,
  </code-line>
  <code-line level-4>
    <mu-key code="isFinished" />: <mu-key-words code='true' />,
  </code-line>
  <code-line level-4>
    <mu-key code="usersReading" />: <mu-number code='[1946, 1293, 7743]' />,
  </code-line>
  <code-line level-3>
  }, {
  </code-line>

  <code-line level-4>
    <mu-key code="id" />: <mu-number code='2' />,
  </code-line>
  <code-line level-4>
    <mu-key code="title" />: <mu-text code='"Записки врача"' />,
  </code-line>
  <code-line level-4>
    <mu-key code="author" />: <mu-text code='"Викентий Вересаев"' />,
  </code-line>
  <code-line level-4>
    <mu-key code="pages" />: <mu-number code='360' />,
  </code-line>
  <code-line level-4>
    <mu-key code="isFinished" />: <mu-key-words code='false' />,
  </code-line>
  <code-line level-4>
    <mu-key code="usersReading" />: <mu-number code='[1922, 1280, 5378, 9576, 10636]' />,
  </code-line>
  <code-line level-3>
  },
  </code-line>
  <code-line level-2>
  ])
  </code-line>

  <code-line>
    <mu-tag code="</script>" />
  </code-line>
</template>

<script setup>
  import CodeLine from '@/code-markup/components/CodeLine.vue';

  // Для шаблона
  import MuTag from '@/code-markup/markup/template/MuTag.vue';
  import MuAttr from '@/code-markup/markup/template/MuAttr.vue';
  // Общие
  import MuText from '@/code-markup/markup/MuText.vue';
  import MuNumber from '@/code-markup/markup/MuNumber.vue';
  import MuComment from '@/code-markup/markup/MuComment.vue';
  // Для секции скриптов
  import MuKey from '@/code-markup/markup/script/MuKey.vue';
  import MuKeyWords from '@/code-markup/markup/script/MuKeyWords.vue';
  import MuVariable from '@/code-markup/markup/script/MuVariable.vue';
</script>

<style lang="scss" scoped>

</style>