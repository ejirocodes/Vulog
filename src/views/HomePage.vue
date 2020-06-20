<template>
  <section class="users-container mt-3">
    <figure class="user" v-for="(user) in users" :key="user.id">
      <router-link
        tag="div"
        :to="{
          name: 'UserDetails',
          params: { id: user.id}
        }"
        exact
      >
        <h2>{{user.name}}</h2>
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
        console.log('home component',this.users);
      });
  }
};
</script>

<style>
.users-container {
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
}
.user {
  height: 20rem;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0.8rem;
  flex: 1 1 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
.user:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>