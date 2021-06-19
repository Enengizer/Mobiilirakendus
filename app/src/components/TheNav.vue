
<template>
  <div class="TheNav">

    <router-link :to="{ name: 'todo-list' }">
      ToDo
    </router-link> |
    <router-link :to="{ name: 'arch-ive' }">
      Archive
    </router-link> |
      <router-link :to="{ name: 'calcu-lator' }">
      Calculator
    </router-link> |
      <router-link :to="{ name: 'ti-mer' }">
      Timer
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheNav'
}
</script>

<style lang="scss" scoped>
.TheNav {
  padding: $theme--spacing-l;

  a {
    font-weight: bold;
    color: $theme--color-secondary;

    &.router-link-exact-active {
      color: $theme--color-main;
    }
  }
}
</style>