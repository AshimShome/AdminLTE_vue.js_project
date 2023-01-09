<template>
 <div class="content-wrapper">
  <div class="container-fluid">
  <div class="row mx-2">

   <div class="col-md-12 p-2">
    <div class="table-container">
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col">SL</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Mark</td>
        </tr>
      
      </tbody>
    </table>
  </div>
   </div>
 </div>
</div>
  </div>
</template>

<script>
export default {
    name: 'UserList',

}
</script>
<style>
 .form-container, .table-container{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #ffff;
    margin: 10px 0px;
    padding: 10px
  }
</style>