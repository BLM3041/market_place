<template>
    <table className="table">
        <thead>
                      <tr>
                      <th scope="col" className="branch-header">Branch Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Graphical Analysis</th>
                      <th scope="col">Stock Management</th>
                      </tr>
                  </thead>
                  <tbody>
                      
                      
                        <tr key={item.id} >
                            <th scope="row" class="col1">
                                <span class="branch-name">some</span> <br/>
                                <span class="action">Update</span> <span> - </span><span class="action">  Delete</span>
                            </th>
                        </tr>
                      
                     
                  </tbody>
    </table>  
</template>

<script>

export default{
    name:'products'
}
</script>

<style scoped>

</style>
