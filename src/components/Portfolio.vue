<template>
    <div>
        <div class="grid">
            <div class="grid-item"><img src="/src/assets/background.png"></div>
            <div class="grid-item "><img src="/src/assets/background.png"></div>
            <div class="grid-item"><img src="/src/assets/background.png"></div>
        </div>
    </div>
</template>

<script>
//import MasonryLib from "./../../node_modules/masonry-layout/dist/masonry.pkgd.min.js"
export default {
  created: function() {
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: 100  
    });
  }
};
</script>

<style>

</style>
