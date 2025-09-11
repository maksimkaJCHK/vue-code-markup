<template>
  <div class="code-markup__fake-line">
    <div class="code-markup__fake-line__coll">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .code-markup__fake-line {
    display: table-row;

    &__coll {
      display: table-cell;
    }

    .code-markup_count &::before {
      content: '';
      display: table-cell;
    }
  }
</style>
