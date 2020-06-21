<template>
  <section class="mt-3">
    <h2>{{post.title}}</h2>
    <p class="post-body mb-4">{{post.body}}</p>
    <p>Comments ({{(Object.keys(comments).length)}})</p>
    <p class="comments" v-for="(comment, index) in comments" :key="comment.id">{{comments[index].body}}</p>
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
  mounted() {
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
        this.comments = data;
        console.log(this.comments.lenght);
      });
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2,
.post-body {
  text-transform: capitalize;
  font-weight: 600;
}
.comments {
  background-color: #fff;
  padding: 1.8rem;
  border-left-style: groove;
}
</style>