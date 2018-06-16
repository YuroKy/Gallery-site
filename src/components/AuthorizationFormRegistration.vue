<template>
    <form class="register-form">
        <input type="text" placeholder="Username" v-model="userName"/>
        <input type="text" placeholder="email address" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="password" placeholder="Confirm password" v-model="passwordConfrimation"/>
        <button>create</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      password :"",
      passwordConfrimation:""
    };
  }
};
</script>

<style>
</style>
