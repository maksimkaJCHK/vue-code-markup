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

    &:first-of-type {
      top: 0;
      left: 0;
      position: sticky;
    }

    .code-markup_count &:last-of-type {
      &::before {
        background: grey;
        position: sticky;
        left: 0;
      }
    }

    &:last-of-type &__coll {
      height: 6px;
    }
  }
</style>
