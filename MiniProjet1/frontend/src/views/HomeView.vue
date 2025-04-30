<!-- HomePage.vue -->
<template>
  <div>
    <Navbar :isLoggedIn="this.isLogged" @logout="logout"/>
    <div class="content">
      <h2>Bienvenue sur notre site !</h2>
      <p v-if="!isLogged">Veuillez vous connecter pour accéder à votre espace personnel.</p>
      <p v-else>Vous êtes connecté. Profitez de nos services !</p>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView";
import {mapActions, mapState} from "vuex";

export default {
  components: { Navbar: NavbarView },
  computed: {
    ...mapState(['User', "isLogged"])
  },
  methods: {
    ...mapActions(['logOut']),
    logout() {
      this.logOut();
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 50px;
}
</style>
