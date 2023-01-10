import {createRouter,createWebHistory} from "vue-router";
import UserList from "../components/pages/UserList.vue";
import Dashboard from "../components/pages/Dashboard.vue";
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