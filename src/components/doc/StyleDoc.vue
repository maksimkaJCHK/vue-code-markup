<template>
  <div class="style-doc">
    <template v-if="props.isRus">
      <h3>Компоненты для блока стилей</h3>

      <p>
        Это компоненты которые находятся в блоке "style". Ниже я их перечислю:
      </p>

      <ul>
        <li>
          <strong>MuStyleClass</strong> - этот компонент используется для вывода классов.
        </li>
        <li>
          <strong>MuStyleId</strong> - этот компонент используется для вывода id-ов.
        </li>
        <li>
          <strong>MuStyleTag</strong> - этот компонент используется для вывода тегов.
        </li>
        <li>
          <strong>MuStyleKey</strong> - если нужно вывести код препроцессора (less или sass), то этот компонент нужен для создания вложенных правил. К примеру, если у нас есть класс ".book", и в нём лежит CSS компонент "&-item", то "&-item" нужно вывечти через "MuStyleKey".
        </li>
        <li>
          <strong>MuStyleParam</strong> - в этот компонент нужно будет положить свойства CSS элемента. Если объяснять более подробно, то этими свойствами являются margin, padding, font-size и тд. 
        </li>
        <li>
          <strong>MuStyleUnitMeas</strong> - этот компонент нужен для вывода единиц измерения (em. rem, px и тд).
        </li>
        <li>
          <strong>MuStyleAmpersand</strong> - этот компонент нужен для вывода амперсанда (&).
        </li>
        <li>
          <strong>MuStyleCurlyBrace</strong> - этот компонент нужен для вывода фигурных скобок.
        </li>
      </ul>

      <p>
        Данные компоненты подключаются следующим способом:
      </p>
    </template>

    <template v-if="!props.isRus">
      <h3>Components for the style block</h3>

      <p>
        These are the components that are located in the "style" block. I'll list them below:
      </p>

      <ul>
        <li>
          <strong>MuStyleClass</strong> - this component is used to output classes.
        </li>
        <li>
          <strong>MuStyleId</strong> - this component is used to output IDs.
        </li>
        <li>
          <strong>MuStyleTag</strong> - this component is used to output tags.
        </li>
        <li>
          <strong>MuStyleKey</strong> - if you need to output the preprocessor code (less or sass), then this component is needed to create nested rules. For example, if we have a class."book", and it contains the CSS component "&-item", then "&-item" needs to be displayed using "MuStyleKey".
        </li>
        <li>
          <strong>MuStyleParam</strong> - you will need to put the CSS properties of the element in this component. To explain in more detail, these properties are margin, padding, font-size, and so on. 
        </li>
        <li>
          <strong>MuStyleUnitMeas</strong> - this component is needed to output units of measurement (em. rem, px, etc.).
        </li>
        <li>
          <strong>MuStyleAmpersand</strong> - this component is needed to output the ampersand (&).
        </li>
        <li>
          <strong>MuStyleCurlyBrace</strong> - this component is needed to output curly braces.
        </li>
      </ul>

      <p>
        These components are connected in the following way:
      </p>
    </template>

    <com-imports
      :isRus="props.isRus"
      :codeParam="codeParam"
      :compArr="compArr"
      :codeImport="codeImport"
      :codeOutput="codeOutput"
      :lineCount="15"
    >
      <template #output>
        <code-line>
          <mu-style-id code="#books-list {" />
        </code-line>
        <code-line level-2>
          <mu-style-param code="margin" />:
          <mu-number code=" 1" />
          <mu-style-unit-meas code="em" />
          <mu-number code=" 0 " />
          <mu-number code="2.5" />
          <mu-style-unit-meas code="em" />;
        </code-line>
        <code-line>
          <mu-style-id code="}" />
        </code-line>

        <code-line />

        <code-line>
          <mu-style-class code=".books-list {" />
        </code-line>

        <code-line level-2>
          <mu-style-param code="line-height" />:
          <mu-number code=" 1.2" />;
        </code-line>

        <code-line />

        <code-line level-2>
          <mu-style-tag code="h3 {" />
        </code-line>
        <code-line level-3>
          <mu-style-param code="font-size" />:
          <mu-number code="1.2" />
          <mu-style-unit-meas code="em" />;
        </code-line>
        <code-line level-3>
          <mu-style-param code="margin" />:
          <mu-number code=".4" />
          <mu-style-unit-meas code="em" />
          <mu-number code=" 0 " />
          <mu-number code=".3" />
          <mu-style-unit-meas code="em" />;
        </code-line>
        <code-line level-2 >
          <mu-style-tag code="}" />
        </code-line>

        <code-line />

        <code-line level-2>
          <mu-style-ampersand code="&" />
          <mu-style-key code="-item" />
          <mu-style-curly-brace code=" {" />
        </code-line>
        <code-line level-3>
          <mu-style-param code="margin" />:
          <mu-number code="1.5" />
          <mu-style-unit-meas code="em" />
          <mu-number code=" 0 " />;
        </code-line>
        <code-line level-2>
          <mu-style-curly-brace code="}" />
        </code-line>

        <code-line>
          <mu-style-class code="}" />
        </code-line>
      </template>

      <template #code>
        <code-line level-3 new>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-id " />
          <mu-attr code="code=" />
          <mu-text code='"#books-list {"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=">" />
        </code-line>

        <code-line level-4 new>
          <mu-tag code="<mu-style-param " />
          <mu-attr code="code=" />
          <mu-text code='"margin"' />
          <mu-tag code=" />" />:
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='" 1"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='" 0 "' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='"2.5"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />;
        </code-line>

        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-id " />
          <mu-attr code="code=" />
          <mu-text code='"}"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="<code-line />" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-class " />
          <mu-attr code="code=" />
          <mu-text code='".books-list {"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-param " />
          <mu-attr code="code=" />
          <mu-text code='"line-height"' />
          <mu-tag code=" />" />:
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='" 1.2"' />
          <mu-tag code=" />" />;
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line />" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-tag " />
          <mu-attr code="code=" />
          <mu-text code='"h3 {"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-3" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-param " />
          <mu-attr code="code=" />
          <mu-text code='"font-size"' />
          <mu-tag code=" />" />:
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='"1.2"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />;
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-3" />
          <mu-tag code=" >" />
        </code-line>

        <code-line level-4 new>
          <mu-tag code="<mu-style-param " />
          <mu-attr code="code=" />
          <mu-text code='"margin"' />
          <mu-tag code=" />" />:
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='".4"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />;
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='" 0 "' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='".3"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-tag " />
          <mu-attr code="code=" />
          <mu-text code='"}"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line />" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=" >" />
        </code-line>

        <code-line level-4 new>
          <mu-tag code="<mu-style-ampersand " />
          <mu-attr code="code=" />
          <mu-text code='"&"' />
          <mu-tag code=" />" />
        </code-line>

        <code-line level-4 new>
          <mu-tag code="<mu-style-key " />
          <mu-attr code="code=" />
          <mu-text code='"-item"' />
          <mu-tag code=" />" />
        </code-line>

        <code-line level-4 new>
          <mu-tag code="<mu-style-curly-brace " />
          <mu-attr code="code=" />
          <mu-text code='" {"' />
          <mu-tag code=" />" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-3" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-param " />
          <mu-attr code="code=" />
          <mu-text code='"margin"' />
          <mu-tag code=" />" />:
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='"1.5"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-unit-meas " />
          <mu-attr code="code=" />
          <mu-text code='"em"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-number " />
          <mu-attr code="code=" />
          <mu-text code='" 0 "' />
          <mu-tag code=" />" />;
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=" >" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-curly-brace " />
          <mu-attr code="code=" />
          <mu-text code='"}"' />
          <mu-tag code=" />" />;
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3 new>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4 new>
          <mu-tag code="<mu-style-class " />
          <mu-attr code="code=" />
          <mu-text code='"}"' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-3 new>
          <mu-tag code="</code-line>" />
        </code-line>
      </template>
    </com-imports>
  </div>
</template>

<script setup>
  import useLang from '@/components/code-examples/uselang.js';
  import ComImports from '@/components/code-examples/doc/ComImports.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  const compArr = [
    'MuStyleClass',
    'MuStyleId',
    'MuStyleTag',
    'MuStyleKey',
    'MuStyleParam',
    'MuStyleUnitMeas',
    'MuStyleAmpersand',
    'MuStyleCurlyBrace',
  ];

  const codeImport = `<template>
  <code-markup>
    <code-line>
      <mu-style-id code="#books-list {" />
    </code-line>
    <code-line level-2>
      <mu-style-param code="margin" />:
      <mu-number code=" 1" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code="2.5" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line>
      <mu-style-id code="}" />
    </code-line>
    <code-line />
    <code-line>
      <mu-style-class code=".books-list {" />
    </code-line>
    <code-line level-2 >
      <mu-style-param code="line-height" />:
      <mu-number code=" 1.2" />;
    </code-line>
    <code-line />
    <code-line level-2 >
      <mu-style-tag code="h3 {" />
    </code-line>
    <code-line level-3 >
      <mu-style-param code="font-size" />:
      <mu-number code="1.2" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line level-3 >
      <mu-style-param code="margin" />:
      <mu-number code=".4" />
      <mu-style-unit-meas code="em" />;
      <mu-number code=" 0 " />
      <mu-number code=".3" />
      <mu-style-unit-meas code="em" />
    </code-line>
    <code-line level-2 >
      <mu-style-tag code="}" />
    </code-line>
    <code-line />
    <code-line level-2 >
      <mu-style-ampersand code="&" />
      <mu-style-key code="-item" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line level-3 >
      <mu-style-param code="margin" />:
      <mu-number code="1.5" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />;
    </code-line>
    <code-line level-2 >
      <mu-style-curly-brace code="}" />;
    </code-line>
    <code-line>
      <mu-style-class code="}" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuStyleClass,
    MuStyleId,
    MuStyleTag,
    MuStyleKey,
    MuStyleParam,
    MuStyleUnitMeas,
    MuStyleAmpersand,
    MuStyleCurlyBrace,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</${'script'}>`;

  const codeOutput = `#books-list {
  margin: 1em 0 2.5em;
}

.books-list {
  line-height: 1.2;
  
  h3 {
    font-size: 1.2em;
    margin: .4em 0 .3em;
  }

  &-item {
    margin: 1.5em 0;
  }
}`;
</script>

<style lang="scss">

</style>