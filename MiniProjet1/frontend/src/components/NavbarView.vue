<!-- NavbarView.vue -->
<template>
  <nav>
    <div class="navbar">
      <h1>Mon Application</h1>
      <h2>Lukas Bourdin - Rémy Caruhel</h2>
      <div v-if="!this.isLoggedIn">
        <button  @click="goToLogin">Login</button>
        <button  @click="goToSignp">Signup</button>
      </div>
      <button v-else @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isLoggedIn"],
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToSignp(){
      this.$router.push("/signup");
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}
button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>