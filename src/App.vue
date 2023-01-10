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
import Navbar_Page from './components/layout/Navbar.vue'
 import Sidebar_Page from './components/layout/Sidebar.vue'
import Footer_Page from './components/layout/Footer.vue'

export default {
    name: 'App',
     components: {
    Navbar_Page,
    Sidebar_Page,
    Footer_Page,
   
  }

}
</script>
