<template>
  <!-- script -->
  <script-block>

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
    <code-line
      level-2
      active
    >
      <mu-key-words code="const" /> <mu-variable code="books" /> = <mu-key-words code='ref' />([
    </code-line>
    <code-line level-3>
      {
    </code-line>
    <code-line 
      level-4
      new
    >
      <mu-key code="id" />: <mu-number code='1' />,
    </code-line>
    <code-line 
      level-4
      new
    >
      <mu-key code="title" />: <mu-text code='"Война и мир"' />,
    </code-line>
    <code-line 
      level-4
      new
    >
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

    <code-line
      level-4
      changed
    >
      <mu-key code="id" />: <mu-number code='2' />,
    </code-line>
    <code-line
      level-4
      changed
    >
      <mu-key code="title" />: <mu-text code='"Записки врача"' />,
    </code-line>
    <code-line level-4>
      <mu-key code="author" />: <mu-text code='"Викентий Вересаев"' />,
    </code-line>
    <code-line level-4 deleted>
      <mu-key code="pages" />: <mu-number code='360' />,
    </code-line>
    <code-line level-4 deleted>
      <mu-key code="isFinished" />: <mu-key-words code='false' />,
    </code-line>
    <code-line level-4 deleted>
      <mu-key code="usersReading" />: <mu-number code='[1922, 1280, 5378, 9576, 10636]' />,
    </code-line>
    <code-line level-3>
    },
    </code-line>
    <code-line level-2>
    ])
    </code-line>

  </script-block>
</template>

<script setup>
  import ScriptBlock from '@/components/blocks/ScriptBlock.vue';
</script>

<style lang="scss" scoped>

</style>