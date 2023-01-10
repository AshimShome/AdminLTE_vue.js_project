<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<div>
    <div class="wrapper">
        <!-- Navbar -->
        <Navbar_Page/>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
          <Sidebar_Page/>
        
        <router-view/>
        <!-- Content Wrapper. Contains page content -->
        
          <!-- <Dashboard_Page/> 
          <UserList/>  -->
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
         <Footer_Page/>
        <!-- Main Footer -->
       
    </div>
</div>
</template>

<script>
import Navbar_Page from './components/Navbar.vue'
 import Sidebar_Page from './components/Sidebar.vue'
import Footer_Page from './components/Footer.vue'
// import Dashboard_Page from './components/Dashboard.vue'
// import UserList from './components/UserList.vue'
export default {
    name: 'App',
     components: {
    Navbar_Page,
    Sidebar_Page,
    Footer_Page,
    // Dashboard_Page,
    //  UserList
  }

}
</script>
