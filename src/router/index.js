import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Activity from "../views/Activity.vue"; 
import Record from "../views/Record.vue"; 
import Graph from "../views/Graph.vue"; 



Vue.use(VueRouter)

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/activity", name: "activity", component: Activity },
    { path: "/record", name: "record", component: Record },
    { path: "/graph", name: "graph", component: Graph }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
