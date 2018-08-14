<template>
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
      ownerName: "Yurii",
      titles: [
        {
          id: 1,
          title: "Home"
        },
        {
          id: 2,
          title: "Portfolio"
        },
        {
          id: 3,
          title: "About me"
        },
        {
          id: 4,
          title: "Orders"
        },
        {
          id: 5,
          title: "CV"
        }
      ]
    };
  }
};
</script>

<style>
</style>
