<template>
    <form class="register-form">
        <input type="text" placeholder="Username" v-model="userName"/>
        <input type="text" placeholder="email address" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="password" placeholder="Confirm password" v-model="passwordConfrimation"/>
        <button>create</button>
        <p class="message" v-on:click="alredyRegistered">Already registered? <a href="#">Sign In</a></p>
    </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      passwordConfrimation: ""
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
        passwordConfrimation: this.passwordConfrimation
      };
      
      // ToDo: Add fetch
    }
  }
};
</script>

<style>
</style>
