<template>
  <section>
    <figure v-for="(user, index) in users" :key="index">
      <router-link
        class="users-container"
        tag="div"
        :to="{
          name: 'UserDetails',
          params: { id: user.id}
        }"
      >
        <h1>Name: {{user.name}}</h1>
        <p>Username:{{user.username}}</p>
        <p>Email: {{user.email}}</p>
        <p>Phone:{{user.phone}}</p>
      </router-link>
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  beforeCreate() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }
};
</script>

<style>
.users-container {
  cursor: pointer;
}
</style>