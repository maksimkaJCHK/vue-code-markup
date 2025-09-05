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

    &::before {
      content: '';
    }

    &::before,
    &-coll {
      display: table-cell;
    }
  }
</style>
