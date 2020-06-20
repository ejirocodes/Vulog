<template>
  <section>
    <div v-for="(user, index) in users" :key="index">
      <h1>Name: {{user.name}}</h1>
      <p>Username:{{user.username}}</p>
      <p>Email: {{user.email}}</p>
      <p>Phone:{{user.phone}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.users = data;
        console.log(data);
      });
  }
};
</script>

<style>
</style>