<template>
  <watch-lines>
    <template #header>
      <template v-if="props.isRus">
        Стилизация "строк кода"
      </template>

      <template v-if="!props.isRus">
        Stylization "lines of code"
      </template>
    </template>

    <template #description>
      <div :class="props.smallClass">
        <p v-if="props.isRus">
          Этот раздел посвящён стилизации "строк кода". Стилизацию активной строки я вынесу в отдельный блок, здесь я опишу стили для новых, изменённых, и удалённых строк. По сути здесь будет не много стилей, в основном это будут цвета границ у номеров строк.
        </p>

        <p v-if="!props.isRus">
          This section is dedicated to the styling of "lines of code". I will put the styling of the active line in a separate block, here I will describe the styles for new, modified, and deleted lines. In fact, there won't be many styles here, mostly the colors of the borders of the line numbers.
        </p>
      </div>
    </template>

    <template #default>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-new-border</strong> - у новых строк я делаю вертикальную линию, отделяющую номера строк от текста строки. Данная СSS-переменная задаёт цвет этой линии. Данный параметр связан с входным параметром "new" для компонента "code-line".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-new-border</strong> - for new lines, I make a vertical line separating the line numbers from the line text. This CSS variable sets the color of this line. This parameter is closely related to the "new" input parameter for the "code-line" component.
        </p>

        <ui-input v-model="cmNewBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-changed-border</strong> - в Visual Studio Code, когда происходят какие-нибудь изменения на строке, она отображается правой вертикальной линией, которая разделяет номер строки и текст строки. Данная CSS-переменная отвечает за цвет этой линии. Данный параметр связан с входным параметром "changed" для компонента "code-line".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-changed-border</strong> - in Visual Studio Code, when any changes occur on a line, it is displayed with a vertical right line that separates the line number and the line text. This CSS variable is responsible for the color of this line. This parameter is associated with the "changed" input parameter for the "code-line" component.
        </p>

        <ui-input v-model="cmChangedBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-deleted-border</strong> - для того, чтобы показать, что строка удалена, я делаю вертикальную линию, которая отделяет номера строк от текста строки. Данная CSS-переменная определяет цвет этой линии. Данный параметр тесно связан с входным параметром "deleted" компонента "code-line".
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-deleted-border</strong> - in order to show that the line has been deleted, I make a vertical line that separates the line numbers from the line text. This CSS variable defines the color of this line. This parameter is closely related to the "deleted" input parameter of the "code-line" component.
        </p>

        <ui-input v-model="cmDeletedBorder" />
      </div>
      <div :class="props.nameRow">
        <p v-if="props.isRus">
          <strong>--cm-deleted-opacity</strong> - данная CSS-переменная отвечает за прозрачность удалённой строки. Для того, чтобы увидеть как это работает, нужно добавить входной параметр "deleted" к компоненту "code-line". Можно задавать значения от 0 до 1. 0 сделает строку полностью прозрачной, вам наверное это не пригодится. 1 сделает строку полностью видимой. Я рекомендую задавать промежуточные значения.
        </p>

        <p v-if="!props.isRus">
          <strong>--cm-deleted-opacity</strong> - this CSS variable is responsible for the transparency of the deleted line. In order to see how it works, you need to add the "deleted" input parameter to the "code-line" component. You can set values from 0 to 1. 0 will make the string completely transparent, you probably won't need it. 1 will make the row fully visible. I recommend setting intermediate values.
        </p>

        <ui-input v-model="cmDeletedOpacity" />
      </div>
    </template>
  </watch-lines>
</template>

<script setup>
  import WatchLines from '@/components/WatchLines.vue';
  import UiInput from '@/UI/UIInput.vue';

  const props = defineProps([
    'isRus',
    'nameRow',
    'smallClass'
  ]);

  const cmNewBorder = defineModel('cm-new-border');
  const cmChangedBorder = defineModel('cm-changed-border');
  const cmDeletedBorder = defineModel('cm-deleted-border');
  const cmDeletedOpacity = defineModel('cm-deleted-opacity');
</script>