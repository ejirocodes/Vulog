<template>
  <b-navbar toggleable="lg" type="dark" :sticky="true" variant="dark">
    <b-navbar-brand to="/">Home</b-navbar-brand>
    <b-nav-item exact to="/post" class="ml-auto post-item">Post</b-nav-item>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.post-item {
  display: flex;
}
.post-item * {
  color: #fff !important;
}
</style>