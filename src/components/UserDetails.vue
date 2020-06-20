<template>
  <section>
    <h1>Name: {{user.name}}</h1>
    <p>Email: {{user.email}}</p>
    <p>Phone:{{user.phone}}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  computed: {
    user() {
      const id = +this.$route.params.id;
      return this.users.find(user => user.id === id);
    }
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
</style>