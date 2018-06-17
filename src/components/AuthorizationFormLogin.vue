<template>
    <form class="login-form">
      <input type="text" placeholder="username" v-model="userName"/>
      <input type="password" placeholder="password" v-model="password"/>
      <button>login</button>
      <p v-on:click="createAccount" class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
</template>

<script>
export default {
  data() {
    return{
      userName: "",
      password: ""
    }
  },
  methods: {
    createAccount: function() {
      this.$emit("createAccount", {});
    }
  }
};
</script>

<style>
</style>
