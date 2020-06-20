<template>
  <section>
    <div>
      <h1>Title: {{userPost.title}}</h1>
      <p>Content: {{userPost.body}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // user: []
    };
  },
  computed: {
    userPost() {
      const id = +this.$route.params.id;
      return this.users.find(user => user.id === id);
    }
  }
  // beforeCreate() {
  //   this.$http
  //     .get("https://jsonplaceholder.typicode.com/users/1")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.user = data;
  //       console.log(data);
  //     });
  // }
};
</script>

<style>
</style>