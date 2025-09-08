<template>
  <div class="code-markup-fake-line">
    <div class="code-markup-fake-line-coll">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .code-markup-fake-line {
    display: table-row;

    &-coll {
      display: table-cell;
    }

    .code-markup-count &::before {
      content: '';
      display: table-cell;
    }
  }
</style>
