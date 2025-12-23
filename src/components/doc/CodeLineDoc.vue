<template>
  <div class="code-line-doc">
    <template v-if="props.isRus">
      <h3>Компонент code-line</h3>

      <p>
        По сути это линия или строка с кодом. Элементы кода должны находиться в этом компоненте. Подключается он следующим способом:
      </p>

      <code-line-example lang="ru" />

      <p>
        Ниже я приведу пример кода и входные параметры. Входные параметры можно менять, что я и советую вам сделать, так будет нагляднее. Если вы открыли данный сайт с компьютера или планшета, то пример кода будет находиться слева, а входные параметры справа. Если вы открыли данный сайт с мобильного телефона, то сначала будут идти входные параметры, а пример кода будет находиться ниже. Посколько описание входных параметров занимает достаточно много места, я сделаю много строк к которым эти параметры будут применяться. Чтобы было понятнее, строки к которым будут применяться входные параметры будут находиться между комментариями.
      </p>

      <p>
        Такие входные параметры как "new", "deleted" и "changed" были взяты из Visual Studio Code. Они отображают новую, удалённую и строку в которой произошли изменения. К компоненту "code-line" должен быть применён только один из этих входных параметров. Первоначально я хотел задать какой-нибудь параметр, к примеру "type" и передаать в него одно из этих трех значений ("new", "deleted" и "changed"), но всё таки я решил от этого отказаться. Вы можете просто задать параметр "new" и строка будет отображаться как новая. Так будет удобнее. Если вы зададите для компонента "code-line" входные параметры "deleted" и "changed", то строка будет отображаться как изменённая, но будет иметь прозрачный текст от входного параметра "deleted". Стили для входного параметра "new" будут иметь наименьший приоритет, имейте это ввиду. Итак, данный компонент имеет следующие входные параметры:
      </p>
    </template>

    <template v-if="!props.isRus">
      <h3>The code-line component</h3>

      <p>
        In fact, this is a line or a line with a code. The code elements must be located in this component. It is connected in the following way:
      </p>

      <code-line-example lang="en" />

      <p>
        Below I will provide an example of the code and input parameters. The input parameters can be changed, which I advise you to do, so it will be clearer. If you have opened this website from a computer or tablet, the sample code will be on the left and the input parameters on the right. If you have opened this website from a mobile phone, the input parameters will be displayed first, and the sample code will be below. Since the description of the input parameters takes up quite a lot of space, I will make many lines to which these parameters will be applied. To make it clearer, the lines to which the input parameters will be applied will be located between the comments.
      </p>

      <p>
        Input parameters such as "new", "deleted" and "changed" were taken from Visual Studio Code. They display the new one, the deleted one, and the row where the changes occurred. Only one of these input parameters should be applied to the "code-line" component. Initially, I wanted to set some parameter, for example, "type" and pass one of these three values to it ("new", "deleted" and "changed"), but still I decided to abandon it. You can simply set the "new" parameter and the row will be displayed as a new one. It will be more convenient this way. If you set the input parameters "deleted" and "changed" for the "code-line" component, the line will be displayed as changed, but it will have transparent text from the input parameter "deleted". Styles for the "new" input parameter will have the lowest priority, keep this in mind. So, this component has the following input parameters:
      </p>
    </template>

    <settings-doc>
      <template #code>
        <code-line-set 
          :isRus="props.isRus"
          :codeParam="codeParam"
          :newParam="newParam"
          :active="active"
          :visibleCopy="visibleCopy"
          :levelCodeLine="levelCodeLine"
          :deleted="deleted"
          :changed="changed"
          :line-through="lineThrough"
        />
      </template>

      <template #content="{ nameRow }">
        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>new</strong> - в Visual Studio Code, когда добавляется новая строка, она отображается правой вертикальной линией, которая разделяет номер строки и текст строки. Данный параметр отображает эту линию. Вертикальная линия будет заметна только в том случае, если номера строк отображаются (включён параметр is-count). По умолчанию данный параметр отключен, те имеет значение false.
          </p>

          <p v-if="!props.isRus">
            <strong>new</strong> - In Visual Studio Code, when a new line is added, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false.
          </p>

          <ui-checkbox
            v-model="newParam"
            value="newParam"
          >
            {{ newParam }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>deleted</strong> - в Visual Studio Code, когда удаляется какая-либо строка, она отображается правой вертикальной линией, которая разделяет номер строки и текст строки. Данный параметр отображает эту линию. Вертикальная линия будет заметна только в том случае, если номера строк отображаются (включён параметр is-count). По умолчанию данный параметр отключен, те имеет значение false. Так же я делаю данную строку не много прозрачной, чтобы показать, что она удалена.
          </p>

          <p v-if="!props.isRus">
            <strong>deleted</strong> - In Visual Studio Code, when a line is deleted, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false. I also make this line slightly transparent to show that it has been deleted.
          </p>

          <ui-checkbox
            v-model="deleted"
            value="deleted"
          >
            {{ deleted }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>changed</strong> - в Visual Studio Code, когда происходят какие-нибудь изменения на строке, она отображается правой вертикальной линией, которая разделяет номер строки и текст строки. Данный параметр отображает эту линию. Вертикальная линия будет заметна только в том случае, если номера строк отображаются (включён параметр is-count). По умолчанию данный параметр отключен, те имеет значение false.
          </p>

          <p v-if="!props.isRus">
            <strong>changed</strong> - in Visual Studio Code, when any changes occur on a line, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false.
          </p>

          <ui-checkbox
            v-model="changed"
            value="changed"
          >
            {{ changed }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>active</strong> - в Visual Studio Code активная строка отличается от других строк background-ом. Данный параметр включает background для строки. По умолчанию данный параметр отключен, те имеет значение false.
          </p>

          <p v-if="!props.isRus">
            <strong>active</strong> - in Visual Studio Code, the active string differs from other background strings. This parameter enables the background for the string. By default, this parameter is disabled, it has the value false.
          </p>

          <ui-checkbox
            v-model="active"
            value="active"
          >
            {{ active }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>lineThrough</strong> - делает текст зачёркнутым. При документировании кода данный входный параметр может сказать, что данная строка кода больше не актуальна, удалена, или заменена на другую строку.
          </p>

          <p v-if="!props.isRus">
            <strong>lineThrough</strong> - makes the text strikethrough. When documenting the code, this input parameter can say that this line of code is no longer relevant, deleted, or replaced with another line.
          </p>

          <ui-checkbox
            v-model="lineThrough"
            value="lineThrough"
          >
            {{ lineThrough }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>visibleCopy</strong> - по умолчанию правый внутренний отступ для строки равен 5px. Возможна такая ситуация, что строк не много, и они достаточно длинные, таким образом кнопка "скопировать текст" будет перекрывать текст строки. При включении данного параметра будет появляться больший правый отступ, так, что можно будет прочитать текст. По умолчанию данный параметр отключен, те имеет значение false.
          </p>

          <p v-if="!props.isRus">
            <strong>visibleCopy</strong> - by default, the inner right indentation for a line is 5px. It is possible that there are not many lines and they are long enough, so the "copy text" button will overlap the text of the line. When this option is enabled, a larger right indentation will appear, so that the text can be read. By default, this parameter is disabled, it has the value false.
          </p>

          <ui-checkbox
            v-model="visibleCopy"
            value="visibleCopy"
          >
            {{ visibleCopy }}
          </ui-checkbox>
        </div>

        <div :class="nameRow">
          <p v-if="props.isRus">
            <strong>level-2 - level-8</strong> - код имеет определённую вложенность. Данные входные параметры нужны для того, чтобы сделать соответствующий отступ. Всего я предусмотрел 8 уровней вложенности, больше делать я смысла не вижу. Попробуйте выбрать уровень вложенности ниже, и посмотрите как будет меняться отступ и строк.
          </p>

          <p v-if="!props.isRus">
            <strong>level-2 - level-8</strong> - the code has a certain nesting. These input parameters are needed in order to make the appropriate indentation. In total, I have provided 8 levels of nesting, I don't see any point in doing more. Try to select the nesting level below, and see how the indentation and lines will change.
          </p>

          <ui-select
            v-model="level"
            :options="levelOptions"
          />
        </div>
      </template>
    </settings-doc>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    watch
  } from 'vue';

  import useLang from '@/components/code-examples/uselang.js';

  import SettingsDoc from '@/components/SettingsDoc.vue';
  import CodeLineExample from '@/components/code-examples/doc/CodeLineExample.vue';
  import CodeLineSet from '@/components/code-examples/doc/CodeLineSet.vue';

  import UiCheckbox from '@/UI/UICheckbox.vue';
  import UiSelect from '@/UI/UISelect.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });

  const { codeParam } = useLang({
    lang: props.isRus ? 'ru' : 'en'
  });

  function* bLevel(count = 9) {
    for (let i = 1; i < count; i++) {
      const id = `level${i}`;
      const title = (i !== 1) ? `level-${i}` : 'none';

      yield {
        id,
        title
      }
    }
  }

  const newParam = ref(false);
  const deleted = ref(false);
  const changed = ref(false);
  const active = ref(false);
  const visibleCopy = ref(false);
  const lineThrough = ref(false);
  const level = ref('level1');
  const levelOptions = ref([...bLevel()]);

  const levelCodeLine = computed(() => ({
    none: level.value === 'level1',
    level2: level.value === 'level2',
    level3: level.value === 'level3',
    level4: level.value === 'level4',
    level5: level.value === 'level5',
    level6: level.value === 'level6',
    level7: level.value === 'level7',
    level8: level.value === 'level8',
  }));

  const resetParam = (cond, stateArr) => {
    if (cond) stateArr.forEach((state) => state.value = false);
  }

  watch(newParam, (state) => {
    resetParam(state, [deleted, changed]);
  });

  watch(deleted, (state) => {
    resetParam(state, [newParam, changed]);
  });

  watch(changed, (state) => {
    resetParam(state, [newParam, deleted]);
  });
</script>

<style lang="scss" scoped>
  .code-line-doc {
    @media screen and (max-width: 700px) {
      .settings-doc-cont {
        --cm-max-height-body: calc(var(--cm-text-line-height) * 3);
      }
    }
  }
</style>