<template>
  <section class="mt-3 d-flex flex-center justify" >
    <figure class="user flex flex-center justify">
      <h2>{{user.name}}</h2>
      <p>Email: {{user.email}}</p>
      <p>Phone:{{user.phone}}</p>
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
      });
  }
};
</script>

<style scoped>
.user {
  height: 12rem;
  width: 15rem;
  margin: 0;
  display: inline-block;
}
</style>