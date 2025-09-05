<template>
  <div class="code-markup-line">
    <div class="code-markup-line-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .code-markup-line {
    white-space: nowrap;
    counter-increment: count;

    &::before {
      color: #fff;
      padding-left: 1em;
      padding-right: 1em;
      content: counter(count);
      display: table-cell;
      background: grey;
      position: sticky;
      left: 0;
    }

    &-content {
      display: table-cell;
      padding-left: 10px;
    }
  }
</style>
