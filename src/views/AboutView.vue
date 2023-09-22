<template>
  
  
  <v-app id="main">
    <v-div class="logo">
      <img class="logo_l" :src="require('./logo.png')" height="40"/>
      <v-toolbar-title class="logo_l">Vuetify</v-toolbar-title>
      
    </v-div>

    <v-div class="search_bar">
      
      <v-card class="search_bar_logo"
      width="250px"
      align-items="right">
      <v-toolbar dense floating>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>
      </v-toolbar>
      </v-card>
      <img class="search_bar_logo" :src="require('./emoji.png')" height="40"/>

    </v-div>
    
    
    
    <v-btn class="button"
    color ="red"
    width  ="100px"
    padding="10px">
       Select All
    </v-btn>
     
      <div class="container parent">
        <dashboard/>
        <HelloWorld/> 
      </div>
        
     

   
    
    
    
   
   
  </v-app>
</template>

<style>
#id{
  padding: 100px;
  margin: 30px;
}
.logo{
  
  margin: 10px;
  
}

.logo_l{
  display: inline-block;
}



.v-btn {
  
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857143em;
    text-transform: uppercase;
    transition-duration: 0.28s;
    transition-property: box-shadow, transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
}
.search_bar{
  position: absolute;
  right: 0%;
}

.search_bar_logo{
  margin: 5px;
  display: inline-block;
}

.button{
  position: absolute;
  right: 0%;
  padding: 100px;
  margin: 90px;
  color: aliceblue;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
     box-shadow: none; 
}
.v-sheet.v-card {
    border-radius: 25px;
}

.hello{
  
  position: relative;
  width: 77%;
  margin-top: 60px;
  margin-left: 300px;

}
.menu{
 margin-top: 60px;

}
.container{
  margin-top: 1px;
  
}
.header{
 margin-top: 30px;
}
.row{
  margin-left: 300px;
  width: 80%;
  
}
.parent {
  
 
  padding: 1rem 1rem;
  
}
.child {
  margin-top: 15px;
  vertical-align: middle;
  
}


</style>

<script>
import dashboard from './dashboard.vue';
import HelloWorld from './HelloWorld';

export default {
  name: 'AboutView',

  components: {
    dashboard,
    HelloWorld,
    
},

  data: () => ({
    //
  }),
};
</script>
