<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/admin/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">Alexander Pierce</a>
            </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                    <router-link to="/" class="nav-link active">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <!-- <i class="right fas fa-angle-left"></i> -->
                        </p>
                    </router-link>

                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-copy"></i>
                        <p>
                            Attendance Options
                            <i class="fas fa-angle-left right"></i>
                            <span class="badge badge-info right">2</span>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="pages/layout/top-nav.html" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Add Attendance</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>View Attendance</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            Payroll List
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-edit"></i>
                        <p>
                            Employee List
                        </p>
                    </a>

                </li>
                <li class="nav-item">
                    <router-link to="/department" class="nav-link">
                        <i class="nav-icon fas fa-table"></i>
                        <p>
                            Department List
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/position" class="nav-link">
                        <i class="nav-icon fas fa-calendar-alt"></i>
                        <p>
                            Position List
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/bonus" class="nav-link">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                            Bonus List
                        </p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/allowance" class="nav-link">
                        <i class="nav-icon fas fa-columns"></i>
                        <p>
                            Allowance
                        </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/deduction" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>
                            Deduction
                        </p>

                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/user-list" class="nav-link">
                        <i class="nav-icon far fa-plus-square"></i>
                        <p>
                            User List
                        </p>
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
</template>

<script>
export default {
    name: 'Sidebar_Page',

}
</script>
