<template>
  <div class="select-lang">
    <span
      :class="{ active: props.lang === 'eng' }"
      @click="cLang('eng')"
    >
      English
    </span>
    |
    <span
      :class="{ active: props.lang === 'rus' }"
      @click="cLang('rus')"
    >
      Русский
    </span>
  </div>
</template>

<script setup>
  const props = defineProps(['lang']);
  const emits = defineEmits(['change-lang']);

  const cLang = (lang) => emits('change-lang', lang);
</script>

<style lang="scss" scoped>
  .select-lang {
    user-select: none;

    span {
      cursor: pointer;
      color: var(--link-color);
      border-bottom: 1px solid var(--link-color);

      &:hover {
        border-bottom: none;
      }
    }

    .active {
      cursor: default;
      color: inherit;
      border-bottom: none;
    }
  }
</style>