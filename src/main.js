import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "@/store";
import ElementUI from 'element-ui';
import '@/styles/element-variables.scss';
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");