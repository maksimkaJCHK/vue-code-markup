<template>
  <div class="code-markup__icon">
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      class="code-markup__icon__svg"
    >
      <g
        fill='none'
        fill-rule='evenodd'
      >
        <path d='M9 2a2 2 0 0 0-2 2v2h2V4h11v11h-2v2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/>
      </g>
    </svg>
  </div>
</template>

<style lang="scss">
  .code-markup__icon {
    $translateX: translateX(-8px);

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
      height: 100%;

      path {
        fill: var(--cm-icon-color);
      }
    }
  }
</style>
