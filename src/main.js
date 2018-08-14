import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const apiUrl =  "http://localhost:3535/api/"
export {apiUrl}
Vue.use(BootstrapVue);



new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
