<template lang="html">
  <nav :class="'navbar is-'+this.$root.color">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navMenuColorprimary-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorprimary-example" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="$router.push({ path: `/` })">
          Tableau de bord
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
