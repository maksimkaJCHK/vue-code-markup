<template>
  <div>
    <ui-checkbox
      v-model="viewСhanges"
      value="viewСhanges"
    >
      {{ viewСhangesText }}
    </ui-checkbox>

    <code-markup
      :code="code"
      :is-header="false"
      v-bind="codeParam"
    >
      <template-block>
        <code-line level-2>
          <mu-tag
            code="<div "
            :inactive="viewСhanges"
          />
          <mu-attr
            code="class="
            :inactive="viewСhanges"
          />
          <mu-text
            code='"common-class '
            :inactive="viewСhanges"
          />
          <mu-text
            code="old-class"
            :inactive="viewСhanges"
          />
          <mu-text
            code=" new-class"
            :bold="viewСhanges"
          />
          <mu-text
            code='"' 
            :inactive="viewСhanges"
          />
          <mu-tag 
            code=">" 
            :inactive="viewСhanges"
          />
        </code-line>
        <code-line level-2>
          <mu-tag
            code="</div>"
            :inactive="viewСhanges"
          />
        </code-line>

        <code-line />

        <code-line
          level-2
        >
          <mu-tag 
            code="<div " 
            :inactive="viewСhanges"
          />
          <mu-attr 
            code="class=" 
            :inactive="viewСhanges"
          />
          <mu-text
            code='"example-class'
            :bold="viewСhanges"
          />
          <mu-text
            code=' old-class '
            :inactive="viewСhanges"
          />
          <mu-text
            code='new-class"'
            :inactive="viewСhanges"
          />
          <mu-tag
            code=">"
            :inactive="viewСhanges"
          />
        </code-line>
        <code-line level-3>
          <mu-type 
            code="Some piece of text, "
            :inactive="viewСhanges"
          />
          <mu-type 
            code=" I will draw attention to this part of the text"
            :bold="viewСhanges"
          />
          <mu-type 
            code=", but not to this one."
            :inactive="viewСhanges"
          />
        </code-line>
        <code-line level-2>
          <mu-tag
            code="</div>"
            :inactive="viewСhanges"
          />
        </code-line>
      </template-block>
    </code-markup>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useLang from '../useLang';
  import TemplateBlock from '@/components/blocks/TemplateBlock.vue';
  import UiCheckbox from '@/UI/UICheckbox.vue';

  const props = defineProps({
    lang: {
      type: String,
      default: 'en',
      validator(value) {
        return ['ru', 'en'].includes(value);
      }
    }
  });

  const { codeParam } = useLang(props);

  const code = `<template>
  <div class="common-class old-class new-class">
  </div>

  <div class="example-class old-class new-class">
  </div>
</template>`;

  const viewСhanges = ref(false);
  const viewСhangesText = computed(() => {
    let arr = ['Hide changes', 'Show changes'];

    if (props.lang === 'ru') arr = ['Скрыть изменения', 'Показать изменения'];

    return viewСhanges.value ? arr[0] : arr[1];
  });
</script>

<style lang="scss" scoped>

</style>