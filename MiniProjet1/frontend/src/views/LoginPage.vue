<template>
  <div>
    <Navbar :isLoggedIn="false" />
    <div class="login-form">
      <h2>Connexion</h2>
      <input type="text" v-model="email" placeholder="Nom d'utilisateur" />
      <input type="password" v-model="password" placeholder="Mot de passe" />
      <button @click="login">Se connecter</button>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView";
import {mapActions} from "vuex";

export default {
  components: { Navbar: NavbarView },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(['signIn']),
    async login() {
      if (this.email && this.password) {
        if (await this.signIn({email: this.email, password: this.password}) === 0) {
          this.$router.push("/");
        }
      }else {
          alert("Veuillez remplir tous les champs.");
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
input {
  margin: 5px 0;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.google-login {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.google-login:hover {
  background-color: #a33324;
}
</style>
