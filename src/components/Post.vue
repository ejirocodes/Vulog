<template>
  <section>
    <h1>Title: {{post.title}}</h1>
    <p>{{post.body}}</p>
    <p v-for="(comment, index) in comments" :key="comment.id">Comments: {{comments[index].body}}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: [],
      comments: {}
    };
  },
  beforeCreate() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.post = data;
      });
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const resultArr = [];
        for (let key in data) {
          resultArr.push(data[key]);
        }
        this.comments = resultArr;
      });
  }
};
</script>

<style>
</style>