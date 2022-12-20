import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./index.css";
import apolloProvider from "./lib/apolloProvider";
import VueObserveVisibility from "vue-observe-visibility";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueObserveVisibility);

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
