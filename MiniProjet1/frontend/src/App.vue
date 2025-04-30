<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "App",
  methods:{
    ...mapActions(['checkSession'])
  },
  created() {
    this.checkSession()
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>