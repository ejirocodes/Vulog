<template>
  <section>
    <div>
      <h1>Name: {{user.name}}</h1>
      <p>Email: {{user.email}}</p>
      <p>Phone:{{user.phone}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: []
    };
  },
  beforeCreate() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.user = data;
        console.log(data);
      });
  }
};
</script>

<style>
</style>