<template>
  <section class="users-container">
    <figure class="user" v-for="(user) in users" :key="user.id">
      <router-link
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
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;
  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}
.user {
  margin-left: 5px;
  margin-right: 5px;
  padding: 0.8rem;
  flex: 1 1 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.user:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>