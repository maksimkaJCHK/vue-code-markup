<template>
  <div
    class="code-markup__icon"
    :class="{ 'code-markup__icon_animation': props.isCopy }"
  >
    <code-icon :svg-class="iconClass" />
    <code-icon-copy :svg-class="iconClassIsCopy" />
  </div>
</template>

<script setup>
  import CodeIcon from './CodeIcon.vue';
  import CodeIconCopy from './CodeIconCopy.vue';

  const iconClass = 'code-markup__icon__svg';
  const iconClassIsCopy = [iconClass, `${iconClass}__is-copy`];

  const props = defineProps(['isCopy']);
</script>

<style lang="scss">
  @keyframes iconFadeIn {
    0%, 90% {
      opacity: 0;
    }
    91%, 100% {
      opacity: 1;
    }
  }

  @keyframes iconFadeOut {
    0%, 90% {
      opacity: 1;
    }
    91%, 100% {
      opacity: 0;
    }
  }

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

    &_animation {
      .code-markup__icon {
        &__svg {
          animation: iconFadeIn var(--icon-animation);
        }

        &__svg__is-copy {
          animation: iconFadeOut var(--icon-animation);
        }
      }
    }

    &__svg {
      width: 100%;

      path {
        fill: var(--cm-icon-color);
      }

      &__is-copy {
        top: 0;
        left: 0;
        position: absolute;
        opacity: 0;

        path {
          fill: var(--cm-new-border);
        }
      }
    }
  }
</style>
