<template>
  <code-markup
    header="BooksList.vue"
    :code="code"
  >
    <!-- template -->
    <code-line>
      <mu-tag code="<template>" />
    </code-line>

    <code-line level-2>
      <mu-tag code='<div '/>
      <mu-attr code='class=' />
      <mu-text code='"books-list"' />
      <mu-tag code='>'/>
    </code-line>

    <code-line level-3>
      <mu-tag code='<div' />
    </code-line>
    <code-line level-4 active>
      <mu-key-words code='v-for' />
      <mu-attr code='="book ' />
      <mu-key-words code='in' />
      <mu-attr code=' books"' />
    </code-line>
    <code-line level-4>
      <mu-attr code=':key="' />
      book.
      <mu-key code='id' />
      <mu-attr code='"' />
    </code-line>
    <code-line level-4 active>
      <mu-attr code='class=' />
      <mu-text code='"books-list-item"' />
    </code-line>
    <code-line level-3>
      <mu-tag code='>' />
    </code-line>
    <code-line level-4>
      <mu-tag code='<h3>{' />
      <mu-tag code='{ ' />
      book.<mu-key code="title " />
      <mu-tag code=' }}</h3>' />
    </code-line>
    <code-line level-4>
      <mu-tag code="<div " />
      <mu-attr code="class=" />
      <mu-text code='"author"' />
      <mu-tag code=">" />
    </code-line>
    <code-line level-5>
      <mu-tag code="{" />
      <mu-tag code="{ " />
      book.<mu-key code="author " />
      <mu-tag code="}}" />
    </code-line>
    <code-line level-4>
      <mu-tag code="</div>" />
    </code-line>
    <code-line level-4>
      <mu-tag code="<div " />
      <mu-attr code="class=" />
      <mu-text code='"pages"' />
      <mu-tag code=">" />
    </code-line>
    <code-line level-5>
      <mu-tag code="{" />
      <mu-tag code="{ " />
      book.<mu-key code="pages " />
      <mu-tag code="}}" />
    </code-line>
    <code-line level-4>
      <mu-tag code="</div>" />
    </code-line>
    <code-line level-3>
      <mu-tag code='</div>' />
    </code-line>
    <code-line level-2>
      <mu-tag code='</div>'/>
    </code-line>

    <code-line>
      <mu-tag code="</template>" />
    </code-line>

    <code-line />

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

    <code-line />
    <!-- Стили -->
    <code-line>
      <mu-tag code="<style " />
      <mu-attr code="lang=" />
      <mu-text code='"scss"' />
      <mu-attr code=" scoped" />
      <mu-tag code=">" />
    </code-line>

    <code-line level-2>
      <mu-style-class code=".books-list {" />
    </code-line>

    <code-line level-3>
      <mu-style-param code="line-height" />:
      <mu-number code=" 1.2" />;
    </code-line>
    <code-line level-3>
      <mu-style-param code="margin" />:
      <mu-number code=" 1" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code="2.5" />
      <mu-style-unit-meas code="em" />;
    </code-line>

    <code-line />

    <code-line level-3>
      <mu-style-tag code="h3 {" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="font-size" />:
      <mu-number code="1.2" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line level-4>
      <mu-style-param code="margin" />:
      <mu-number code=".4" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code=".3" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line level-3>
      <mu-style-tag code="}" />
    </code-line>

    <code-line />

    <code-line level-3>
      <mu-style-ampersand code="&" />
      <mu-style-key code="-item" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line level-4>
      <mu-style-param code="margin" />:
      <mu-number code="1.5" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />;
    </code-line>
    <code-line level-3>
      <mu-style-curly-brace code="}" />
    </code-line>

    <code-line level-2>
      <mu-style-class code="}" />
    </code-line>
    <code-line>
      <mu-tag code="</style>" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import CodeMarkup from '@/code-markup/codemarkup.vue';

  import CodeLine from '@/code-markup/components/CodeLine.vue';

  // Для шаблона
  import MuTag from '@/code-markup/markup/template/MuTag.vue';
  import MuAttr from '@/code-markup/markup/template/MuAttr.vue';
  // Для секции скриптов
  import MuText from '@/code-markup/markup/script/MuText.vue';
  import MuKey from '@/code-markup/markup/script/MuKey.vue';
  import MuKeyWords from '@/code-markup/markup/script/MuKeyWords.vue';
  import MuVariable from '@/code-markup/markup/script/MuVariable.vue';
  import MuNumber from '@/code-markup/markup/script/MuNumber.vue';
  import MuComment from '@/code-markup/markup/script/MuComment.vue';
  // Для блока стилей
  import MuStyleClass from '@/code-markup/markup/style/MuStyleClass.vue';
  import MuStyleTag from '@/code-markup/markup/style/MuStyleTag.vue';
  import MuStyleKey from '@/code-markup/markup/style/MuStyleKey.vue';
  import MuStyleParam from '@/code-markup/markup/style/MuStyleParam.vue';
  import MuStyleUnitMeas from '@/code-markup/markup/style/MuStyleUnitMeas.vue';
  import MuStyleAmpersand from '@/code-markup/markup/style/MuStyleAmpersand.vue';
  import MuStyleCurlyBrace from '@/code-markup/markup/style/MuStyleCurlyBrace.vue';

    const code = `<template>
  <div class="books-list">
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
  .books-list {
    line-height: 1.2;
    margin: 1em 0 2.5em;

    h3 {
      font-size: 1.2em;
      margin: .4em 0 .3em;
    }

    &-item {
      margin: 1.5em 0;
    }
  }
</style>`;
</script>

<style lang="scss" scoped>

</style>