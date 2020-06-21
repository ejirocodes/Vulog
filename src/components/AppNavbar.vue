<template>
  <b-navbar toggleable="lg" type="dark" :sticky="true" variant="dark">
    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item exact to="single-post">Post</b-nav-item>
        <b-nav-item exact to="user-post">User Post</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>