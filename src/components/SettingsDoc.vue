<template>
  <div class="settings-doc-cont">
    <div class="settings-doc-col settings-doc-code">
      <slot name="code"></slot>
    </div>
    <div class="settings-doc-col settings-doc-content">
      <slot
        name="content"
        :nameRow="nameRow"
      ></slot>
    </div>
  </div>
</template>

<script setup>
  const nameRow = "settings-doc-row";
</script>

<style lang="scss">
  .settings-doc {
    &-cont {
      display: grid;
      gap: 10px 20px;;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }
    
    &-col {
      .code-markup {
        margin: 0;
      }
    }

    &-content {
      p {
        margin: .5em 0;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    &-row {
      margin: 1em 0;

      &:first-of-type {
        margin-top: 0;
      }
    }

    &-code {
      overflow: hidden;
    }

    @media screen and (max-width: 700px) {
      &-code {
        grid-row-start: 2;
      }

      &-content {
        grid-row-start: 1;
      }
    }
  }
</style>