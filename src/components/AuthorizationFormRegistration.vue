<template>
    <div class="register-form">
        <input type="text" placeholder="Username" v-model="userName"/>
        <input type="text" placeholder="email address" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="password" placeholder="Confirm password" v-model="confirmPassword"/>
        <button v-on:click="register">create account</button>
        <p class="message" v-on:click="alredyRegistered">Already registered? <a href="#">Sign In</a></p>
    </div>

</template>

<script>
import { apiUrl } from "../main.js";
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    alredyRegistered: function() {
      this.$emit("alredyRegistered", {});
      console.log("alredy");
    },
    register: function() {
      var userData = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      };

      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      };

      var url = apiUrl + "Account/Register";
        fetch(url, request).then(response => console.log(response));
    }
  }
};
</script>

<style>
</style>
