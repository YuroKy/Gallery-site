<template>
    <form class="login-form">
      <input type="text" placeholder="username" v-model="userName"/>
      <input type="password" placeholder="password" v-model="password"/>
      <button v-on:click="login">login</button>
      <p v-on:click="createAccount" class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
</template>

<script>
import { apiUrl } from "../main.js";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    createAccount: function() {
      this.$emit("createAccount", {});
    },
    login: function() {
      var userData = {
        userName: this.userName,
        password: this.password
      };
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      };
      var url = apiUrl + "account/login";
      fetch(url, request)
        .then(response => response.json())
        .then(data => sessionStorage.setItem("accessToken", data.accessToken));
    }
  }
};
</script>

<style>
</style>
