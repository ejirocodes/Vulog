<template>
  <section class="mt-3">
    <div class="user">
      <h2>{{userPost.name}}</h2>
      <p>Email: {{userPost.email}}</p>
      <p>Phone: {{userPost.phone}}</p>
      <p>Website: {{userPost.website}}</p>
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
  computed: {
    userPost() {
      const id = +this.$route.params.id;
      return this.users.find(user => user.id === id);
    }
  },
  mounted() {
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

<style scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
  margin: auto;
}
</style>