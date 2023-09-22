<template>
    <div class="dash child" style="float: left!important;">
      
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Dashboard</v-toolbar-title>
      </v-toolbar>
  
      <v-list class="list" lines="two">
        <template v-for="(item, index) in items">
          <v-list-subheader class="header" v-if="item.header" :key="item.header" inset>
            {{ item.header }}
          </v-list-subheader>
  
          <v-divider v-else-if="item.divider" :key="index" inset></v-divider>
          
  
          <v-list-item  class="title" v-else :key="item.title" ripple>
          <v-list-subheader  class="title" v-if="item.title" :key="item.title" inset>
            {{ item.title }}
          </v-list-subheader>
        </v-list-item>
        </template>
      </v-list>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          {
            header: 'KYC Application',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: 'Approved Aplication',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: 'Pending Aplication',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: 'Rejected Aplication',
          },
          {
            header: 'KYC Complete App',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: 'KYC Compliate App',
          },
  
          {
            header: 'Setting',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: 'Configuration Setting',
          },
          
          
        ],
      }),
    }
  </script>

  <style>
  .dash{
    
    padding-top: 60px;
    width: 280px;
    height: 500px;
    background-color: transparent;
  }
  .list{
    margin-left: 10px;
  }
  .header{
    font-weight: lighter;
  }
  .title{
    font-weight: lighter;
  }
  .v-application .title {
    font-size: 1.25rem !important;
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
}
</style>

  