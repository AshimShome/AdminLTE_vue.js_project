import {createRouter,createWebHistory} from "vue-router";
import UserList from "../components/UserList.vue";
const routes=[
    {
      path: "/user",
      name:"UserList",
      component:UserList
    }
]
export default createRouter({
    history:createWebHistory('/'),
    routes,
})