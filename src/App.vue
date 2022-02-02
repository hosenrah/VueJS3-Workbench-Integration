<template>
  <div class="container">
    <div class="headline">
      <h1 class="wb-type-heading-l">VueJS 3</h1>
      <img alt="wb logo" src="./assets/wb-logo-dark.svg" class="logo">
      <h1 class="wb-type-heading-l">Integration</h1>
    </div>
    <WorkbenchComponents msg=" Welcome to Your Vue.js + TypeScript + Workbench App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WorkbenchComponents from '@/components/WorkbenchComponents.vue'

export default defineComponent({
  name: 'App',
  components: {
    WorkbenchComponents
  },
});
</script>

<style>
.container {
  width: 50vw;
  margin: 0 auto;
}

.headline {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.logo {
  height: 3rem;
  margin-top: 0.4rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
