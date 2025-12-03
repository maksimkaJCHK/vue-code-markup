<template>
  <div class="temp-doc">
    <template v-if="props.isRus">
      <h3>Компоненты для блока скриптов</h3>

      <p>
        Это компоненты которые находятся в блоке "script". Ниже я их перечислю
      </p>

      <ul>
        <li>
          <strong>MuKey</strong> - если нужно отобразить объект, то для написания ключа объекта используется этот компонент. 
        </li>
        <li>
          <strong>MuKeyWords</strong> - это ключевые слова, в JS таковыми словами являются import, export, const, let, var, fucntion и тд. 
        </li>
        <li>
          <strong>MuVariable</strong> - если нужно отобразить название переменной, то используется этот компонент. 
        </li>
        <li>
          <strong>MuFunction</strong> - если нужно отобразить название функци, то используется этот компонент. 
        </li>
      </ul>

      <p>Пример подключения компонентов для блока скриптов:</p>
    </template>

    <template v-if="!props.isRus">
      <h3>Components for the script block</h3>

      <p>
        These are the components that are in the "script" block. I'll list them below.
      </p>

      <ul>
        <li>
          <strong>MuKey</strong> - if you need to display an object, then this component is used to write the object's key. 
        </li>
        <li>
          <strong>MuKeyWords</strong> are keywords. In JS, such words are import, export, const, let, var, fucntion, and so on. 
        </li>
        <li>
          <strong>MuVariable</strong> - if you need to display the name of a variable, this component is used. 
        </li>
        <li>
          <strong>MuFunction</strong> - if you need to display the function name, this component is used. 
        </li>
      </ul>

      <p>Example of connecting components for a script block:</p>
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
          <mu-key-words code="const " />
          <mu-variable code="someObject" />
          =
          <mu-key-words code="ref" />
          ({
        </code-line>
        <code-line level-2>
          <mu-key code="key" />
          : value
        </code-line>
        <code-line>
        });
        </code-line>

        <code-line />

        <code-line>
          <mu-key-words code="function " />
          <mu-function code="exampleFunction()" />
          {
        </code-line>
        <code-line level-2>
          <mu-key-words code="return " />
          <mu-variable code="someObject" />
          ;
        </code-line>
        <code-line>
          }
        </code-line>

        <code-line v-for="i in 8" :key="i" />
      </template>

      <template #code>
        <code-line level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-key-words " />
          <mu-attr code="code=" />
          <mu-text code='"const " ' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-variable " />
          <mu-attr code="code=" />
          <mu-text code='"someObject" ' />
          <mu-tag code=" />" />
        </code-line>

        <code-line level-4>
          <mu-type code="=" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-key-words " />
          <mu-attr code="code=" />
          <mu-text code='"ref" ' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4>
          <mu-type code="({" />
        </code-line>
        <code-line level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3>
          <mu-tag code="<code-line" />
          <mu-attr code=" level-2" />
          <mu-tag code=">" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-key " />
          <mu-attr code="code=" />
          <mu-text code='"key" ' />
          <mu-tag code=" />" />
        </code-line>
        <code-line level-4>
          <mu-type code=": value" />
        </code-line>
        <code-line level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4>
          <mu-type code="});" />
        </code-line>
        <code-line level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line />
        <code-line level-3>
          <mu-tag code="<code-line />" />
        </code-line>
        <code-line />

        <code-line level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-key-words " />
          <mu-attr code="code=" />
          <mu-text code='"function "' />
          <mu-tag code="/>" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-function " />
          <mu-attr code="code=" />
          <mu-text code='"exampleFunction() "' />
          <mu-tag code="/>" />
          <mu-type code="{" />
        </code-line>

        <code-line level-3>
          <mu-tag code="</code-line>" />
        </code-line>

         <code-line level-3>
          <mu-tag code="<code-line " />
          <mu-attr code="level-2" />
          <mu-tag code=">" />
        </code-line>

        <code-line level-4>
          <mu-tag code="<mu-key-words " />
          <mu-attr code="code=" />
          <mu-text code='"return "' />
          <mu-tag code="/>" />
        </code-line>
        <code-line level-4>
          <mu-tag code="<mu-variable " />
          <mu-attr code="code=" />
          <mu-text code='"someObject"' />
          <mu-tag code="/>" />
        </code-line>
        <code-line level-4>
          ;
        </code-line>
        <code-line level-3>
          <mu-tag code="</code-line>" />
        </code-line>

        <code-line level-3>
          <mu-tag code="<code-line>" />
        </code-line>
        <code-line level-4>
        }
        </code-line>
        <code-line level-3>
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
    "MuKey",
    "MuKeyWords",
    "MuVariable",
    "MuFunction",
  ];

  const codeImport = `<template>
  <code-markup>
    <code-line>
      <mu-key-words code="const " />
      <mu-variable code="someObject" />
      =
      <mu-key-words code="ref" />
      ({
    </code-line>
    <code-line level-2>
      <mu-key code="key" />
      : value
      </code-line>
      <code-line>
      });
    </code-line>
    <code-line />
    <code-line>
      <mu-key-words code="function "/>
      <mu-function code="exampleFunction() "/>{
    </code-line>
    <code-line level-2>
      <mu-key-words code="return "/>
      <mu-variable code="someObject"/>
      ;
    </code-line>
    <code-line>
    }
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuKey,
    MuKeyWords,
    MuVariable,
    MuFunction,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</${'script'}>`;

  const codeOutput = `const someObject = ref ({
  key : value
});

function exampleFunction() {
  return someObject ;
}`;
</script>

<style lang="scss">

</style>