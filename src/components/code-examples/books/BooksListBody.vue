<template>
  <template-section />
  <code-line />
  <!-- script -->
  <script-section />
  <code-line />
  <!-- Стили -->
  <style-section />
</template>

<script setup>
  import TemplateSection from '@/components/code-examples/tab/TemplateSection.vue';
  import ScriptSection from '@/components/code-examples/tab/ScriptSection.vue';
  import StyleSection from '@/components/code-examples/tab/StyleSection.vue'; 
</script>