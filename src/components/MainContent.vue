<template>
  <main>
    <h1>Vue code markup</h1>

    <div class="boks-list">
      <div
        v-for="book in books"
        :key="book.id"
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
    <code-markup
      header="BooksList.vue"
    >
      <code-line>
        <mu-tag code="<template>" />
      </code-line>

      <code-line level-2>
        <mu-tag code='<div '/>
        <mu-attr code='class=' />
        <mu-text code='"boks-list""' />
      </code-line>

      <code-line level-3>
        <mu-tag code='<div' />
      </code-line>
      <code-line level-4>
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
      <code-line level-4>
        <mu-attr code='class=' />
        <mu-text code='"books-list-item"' />
      </code-line>
      <code-line level-3>
        <mu-tag code='>' />
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

      <code-line>
        <mu-tag code="<script " />
        <mu-attr code="setup" />
        <mu-tag code=">" />
      </code-line>

      <code-line level2>
        <mu-import code="import" />
        { ref }
        <mu-from code="from " />
        <mu-text code="'vue'" />;
      </code-line>

      <code-line />

      <code-line level-2>
        <mu-comment code="// Пример комментария" />
      </code-line>
      <code-line level-2>
        <mu-key-words code="const" /> <mu-variable code="book" /> = <mu-key-words code='ref' />([
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
    </code-markup>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import CodeMarkup from '@/code-markup/codemarkup.vue';

  import CodeLine from '@/code-markup/components/CodeLine.vue';

  import MuTag from '@/code-markup/markup/MuTag.vue';
  import MuImport from '@/code-markup/markup/MuImport.vue';
  import MuFrom from '@/code-markup/markup/MuFrom.vue';
  import MuText from '@/code-markup/markup/MuText.vue';
  import MuKey from '@/code-markup/markup/MuKey.vue';
  import MuKeyWords from '@/code-markup/markup/MuKeyWords.vue';
  import MuVariable from '@/code-markup/markup/MuVariable.vue';
  import MuNumber from '@/code-markup/markup/MuNumber.vue';
  import MuComment from '@/code-markup/markup/MuComment.vue';
  import MuAttr from '@/code-markup/markup/MuAttr.vue';

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
  ]) 
</script>

<style lang="scss">
  main {
    h1 {
      font-size: 1.5em;
      line-height: 1.2;
      margin: 0 0 1em;
    }

    h2 {
      font-size: 1.3em;
      line-height: 1.2;
      margin: 1em 0;
    }

    p {
      line-height: 1.4;
      margin: 1em 0;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;

      &:hover {
        color: #535bf2;
      }
    }
  }
</style>
