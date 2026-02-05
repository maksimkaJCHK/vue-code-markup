<template>
  <div
    class="code-markup__icon"
    :class="{ 'code-markup__icon_no-active': noActive }"
    :title="title"
  >
    <div 
      v-if="props.isError"
      :class="iconClassIsError"
    >
      <slot name="error">
        <code-icon-error />
      </slot>
    </div>

    <template v-else>
      <div
        v-if="!props.isCopy"
        :class="iconClass"
      >
        <slot name="copy">
          <code-icon />
        </slot>
      </div>

      <div
        v-if="props.isCopy"
        :class="iconClassIsCopy"
      >
        <slot name="success">
          <code-icon-success />
        </slot>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  import CodeIcon from './icons/CodeIcon.vue';
  import CodeIconSuccess from './icons/CodeIconSuccess.vue';
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

  const noActive = computed(() => props.isError || props.isCopy);
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
    margin: 0 0 calc(var(--cm-text-font-size) * -1) 0;
    transform: $translateX translateY(5px);

    &:active {
      transform: $translateX translateY(6px);
    }

    &_no-active {
      &:active {
        transform: $translateX translateY(5px);
      }
    }

    &__svg {
      &,
      svg,
      img {
        width: 100%;
        height: auto;
      }

      path {
        fill: var(--cm-icon-color);
      }
    }

    &__svg__is-copy {
      path {
        fill: var(--cm-icon-is-copy-color);
      }
    }

    &__svg__is-error {
      path {
        fill: var(--cm-icon-error-color);
      }
    }
  }
</style>
