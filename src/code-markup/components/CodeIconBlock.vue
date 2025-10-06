<template>
  <div
    class="code-markup__icon"
    :title="title"
  >
    <code-icon-error
      v-if="props.isError"
      :svg-class="iconClassIsError"
    />

    <template v-else>
      <code-icon
        v-if="!props.isCopy"
        :svg-class="iconClass"
      />

      <code-icon-copy
        v-if="props.isCopy"
        :svg-class="iconClassIsCopy"
      />
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import CodeIcon from './icons/CodeIcon.vue';
  import CodeIconCopy from './icons/CodeIconCopy.vue';
  import CodeIconError from './icons/CodeIconError.vue';

  const iconClass = 'code-markup__icon__svg';
  const iconClassIsCopy = [iconClass, `${iconClass}__is-copy`];
  const iconClassIsError = [iconClass, `${iconClass}__is-error`];

  const props = defineProps([
    'isCopy',
    'isError',
    'title',
    'successfulText',
    'errorText',
  ]);

  const title = computed(() => {
    if (props.isError) return props.errorText;
    if (props.isCopy) return props.successfulText;

    return props.title;
  });
</script>

<style lang="scss">
  .code-markup__icon {
    $translateX: translateX(-8px);
    --icon-animation: 5s 1 normal ease-out 0s;

    right: 0;
    float: right;
    width: var(--cm-text-font-size);
    height: var(--cm-text-font-size);
    cursor: pointer;
    position: sticky;
    user-select: none;
    z-index: 1;
    margin: 0 0 calc(var(--cm-text-line-height) * -1) 0;
    transform: $translateX translateY(5px);

    &:active {
      transform: $translateX translateY(6px);
    }

    &__svg {
      width: 100%;

      path {
        fill: var(--cm-icon-color);
      }
    }

    &__svg__is-copy {
      path {
        fill: var(--cm-new-border);
      }
    }

    &__svg__is-error {
      path {
        fill: var(--cm-error-color);
      }
    }
  }
</style>
