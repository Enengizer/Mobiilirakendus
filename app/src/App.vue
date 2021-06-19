<template>
  <div id="app">
    <div class="container">
      <div class="app-content">
        <the-nav class="has-text-centered" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheNav from './components/TheNav'

import Vue from 'vue'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)
export default {
  components: { TheNav }
}
</script>

<style lang="scss">
@import './assets/styles/app';

#app {
  color: $theme--color-secondary;
  background: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  padding: 0 $theme--spacing-s;
}

.app-content {
  background: $grey-lightest;
  padding: $theme--spacing-m;
  padding-top: 0;
  border-radius: 5px;
  margin: $theme--spacing-m auto;
  min-height: 300px;

  @include tablet {
    width: 40%;
  }
}
</style>