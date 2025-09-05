<template>
  <div class="code-markup-icon">
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      class="code-markup-icon-svg"
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
  .code-markup-icon {
    top: 0;
    left: 0;
    width: 1em;
    height: 1em;
    margin: 0 0 -1em auto;
    cursor: pointer;
    position: sticky;
    user-select: none;
    z-index: 1;

    &:active {
      transform: translateY(1px);
    }

    &-svg {
      width: 100%;
      height: 100%;

      path {
        fill: var(--cm-icon-color);
      }
    }
  }
</style>
