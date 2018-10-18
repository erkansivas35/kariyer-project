import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import JobDetail from "./views/JobDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/joblist",
      name: "home",
      component: Home,
    },
    {
      path: "/jobdetail/:id", 
      name: "jobDetail",
      component: JobDetail,
    },
    { path: '/', redirect: '/joblist' }
  ]
});
