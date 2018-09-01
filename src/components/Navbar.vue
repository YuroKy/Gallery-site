<template>
import func from './vue-temp/vue-editor-bridge';
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{this.ownerName}} Galery</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li v-for="item in titles" :key="item.id">
        <a class="nav-link" href="#">{{item.title}}</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      currentUserRole: "",
      role: {
        admin: "Admin",
        user: "User",
        guest: "Guest"
      },
      ownerName: "Yurii",
      titles: [
        {
          id: 1,
          title: "Home",
          availibleRoles: [role.admin, role.user, role.guest]
        },
        {
          id: 2,
          title: "Portfolio",
          availibleRoles: [role.admin, role.user, role.guest]
        },
        {
          id: 3,
          title: "About me",
          availibleRoles: [role.admin, role.user, role.guest]
        },
        {
          id: 4,
          title: "Orders",
          availibleRoles: [role.admin, role.user, role.guest]
        },
        {
          id: 5,
          title: "CV",
          availibleRoles: [role.admin, role.user]
        },
        {
          id: 6,
          title: "Uploads",
          availibleRoles: [role.admin]
        },
        {
          id: 7,
          title: "Account settings",
          availibleRoles: [role.admin, role.user]
        }
      ]
    };
  },
  computed: {
    getTitlesByRoles: function(role) {
      return this.titles.filter(x => x.availibleRoles.includes(role) === true);
    }
  },
  created: function() {
    
  }
};
</script>

<style>
</style>
