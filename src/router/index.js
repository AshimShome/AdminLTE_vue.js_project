import {createRouter,createWebHistory} from "vue-router";
import UserList from "../components/UserList.vue";
import Dashboard from "../components/Dashboard.vue";
const routes=[
    {
      path: "/user-list",
      name:"UserList",
      component:UserList
    },
    {
      path: "/",
      name:"dashboard",
      component:Dashboard
    }
]
export default createRouter({
    history:createWebHistory('/'),
    routes,
})