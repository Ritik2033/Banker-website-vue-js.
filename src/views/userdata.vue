<template>
    <v-app>
        <h1>User Details</h1>
        <table class="table">
            
            <tr class="heading">
                <th class="heading">Id</th>
                <th class="heading">Email</th>
                <th class="heading">First name</th>
                <th class="heading">Last name</th>
                <th class="heading">Avatar</th>
            </tr>

            <tr class="head" v-for="item in list" :key="item.id">
                <th class="head">{{ item.id }}</th>
                <th class="head">{{ item.email }}</th>
                <th class="head">{{ item.first_name }}</th>
                <th class="head">{{ item.last_name }}</th>
                <th class="head"><img :src="item.avatar" :alt="`${item.first_name} ${item.last_name}`" /></th>
            </tr>

            <tr v-if="list.length > 1" class="divider-row">
                <td colspan="5"></td>
            </tr>
        </table>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
    name: "userdata",
    data() {
        return {
            page: null,
            per_page: null,
            total: null,
            total_pages: null,
            list: []
        };
    },
    mounted() {
        this.fetchUserData();
    },
    methods: {
        fetchUserData() {
            this.page = this.$route.params.page; // Use this.page instead of id
            axios.get(`https://reqres.in/api/users?page=${this.page}`)
                .then(response => {
                    console.log(response.data)
                    this.list.push(...response.data.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>

<style>
.body {
    padding: 20px;
}
 h1{
    width: 100%;
    text-align: center;
}
.table{
    
    
}
</style>
