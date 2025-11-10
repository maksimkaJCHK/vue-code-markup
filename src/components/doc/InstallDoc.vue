<template>
  <div class="intro-doc">
    <template v-if="props.isRus">
      <h2>
        Глобальная установка, подключение плагина
      </h2>

      <p>
        Для установки моего плагина необходимо иметь установленный node.js и npm последней версии. В терминале нужно ввести следующую команду:
      </p>

      <instal-code lang="ru" />

      <p>
        После установки, если никаких ошибок не возникнет, нужно подключить мой плагин следующим способом:
      </p>

      <enable-plagin lang="ru" />

      <p>
        Возможно подключить только CSS и отдельные компоненты, как это сделать я опише ниже.
      </p>
    </template>

    <template v-if="!props.isRus">
      <h2>
        Global installation, configuration plugin
      </h2>

      <p>
        To install my plugin, you need to have node installed.js and npm are the latest versions. Enter the following command in the terminal:
      </p>

      <instal-code />

      <p>
        After installation, if no errors occur, you need to connect my plugin in the following way:
      </p>

      <enable-plagin />

      <p>
        It is possible to connect only CSS and individual components, as I described below.
      </p>
    </template>
  </div>
</template>

<script setup>
  import InstalCode from '@/components/code-examples/doc/InstalCode.vue';
  import EnablePlagin from '@/components/code-examples/doc/EnablePlagin.vue';

  const props = defineProps({
    isRus: {
      type: Boolean,
      default: false,
    }
  });
</script>

<style lang="scss" scoped>

</style>