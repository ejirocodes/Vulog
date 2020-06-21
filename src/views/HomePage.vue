<template>
  <section class="center mt-3">
    <h2 style="text-align: center" class="mb-3">All Users</h2>
    <div class="users-container mt-3">
      <figure class="user" v-for="(user) in users" :key="user.id">
        <router-link
          tag="div"
          class="router-link"
          :to="{
          name: 'UserDetails',
          params: { id: user.id}
        }"
          exact
        >
          <h2>{{user.name}}</h2>
        </router-link>
      </figure>
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
        console.log("home component", this.users);
      });
  }
};
</script>

<style>
.users-container {
  cursor: pointer;
}
.user {
  height: 20rem;
  padding: 0.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
.user:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>

<style  scoped>
.user {
  border-radius: 10px 100px / 120px;
  width: 50vw;
  margin: auto;
  margin-bottom: 1.6rem;
}
.router-link {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
h2 {
  text-align: center;
}
@media screen  and (max-width: 768px){
  .user {
  width: 85vw;
  border-radius: 10px 50px / 170px;

}
}
</style>