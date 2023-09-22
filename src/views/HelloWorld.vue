<template>
  
    
    <div class="data child">
    <div width="75%;" >
      <h1 >Pending Application:</h1>
      <hr width="75%;" style="float:right">
    </div>

   <table class="table" style="margin-left: 20px;  float:right; !important" >
      <tr class="heading">
        <th></th>
        <th class="heading">Id</th>
        <th class="heading">Title</th>
        <th class="heading">Author</th>
        <th class="heading">Is_paid</th>
        <th class="heading">Price</th>
        <th class="heading">Catebory_name</th>
      </tr>

      <tr class="head" v-for="item in list" v-bind:key="item.id">
        <th class="head">{{ item.id }}</th>
        <th class="head">{{ item.title }}</th>
        <th class="head">{{ item.author }}</th>
        <th class="head">{{ item.is_paid }}</th>
        <th class="head">{{ item.price }}</th>
        <th class="head">{{ item.catebory_name }}</th>
        
        
      </tr>
      
      
    </table>
  </div>

  
  
</template>

<script>
import vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
vue.use(VueAxios,axios)
  export default {
    name: 'HelloWorld',

    data: ()  =>{

      return{list:undefined}
    },
    async mounted() {
        let result = await axios.get("https://www.rrtutors.com/assets/test.json");
        this.list= result.data.booklist;
        console.warn("api data ", result.data.booklist);
       
    }
  
      
  }
</script>
<style>

.data{
  position: relative;
  min-width: 75%!important;
 
}
.heading{
  padding: 20px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}
.head{
  font-weight: normal;
  padding-top: 20px;
 

  
}
h1{
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
}
.table{
 
  width: 75%!important;
 margin-top: 30px;
  box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
  
}
.checkbox{
  
 width: 20px;
 height: 20px;
 margin: 20px;
  margin-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}


</style>
