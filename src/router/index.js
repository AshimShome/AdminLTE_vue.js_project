import {createRouter,createWebHistory} from "vue-router";
import UserList from "../components/pages/UserList.vue";
import Dashboard from "../components/pages/Dashboard.vue";
import DeductionList from "../components/pages/Deduction.vue";
import AllowanceList from "../components/pages/Allowance.vue";
import BonusList from "../components/pages/Bonus.vue";
import PositionList from "../components/pages/Position.vue";
import DepartmentList from "../components/pages/Department.vue";
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
    },
    {
      path: "/deduction",
      name:"DeductionList",
      component:DeductionList
    },
    {
      path: "/allowance",
      name:"AllowanceList",
      component:AllowanceList
    },
    {
      path: "/bonus",
      name:"BonusList",
      component:BonusList
    },
    {
      path: "/position",
      name:"PositionList",
      component:PositionList
    },
    {
      path: "/department",
      name:"DepartmentList",
      component:DepartmentList
    }
]
export default createRouter({
    history:createWebHistory('/'),
    routes,
})