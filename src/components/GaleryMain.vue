<template>
<div>
    <div class="row">
      <div class="col-md-12">
        <navbar></navbar>
      </div>
    </div>
        <portfolio></portfolio>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
export default {
  data() {
    return {};
  },
  components: { Navbar, Portfolio }
};
</script>

<style>
</style>
