<template>
    <v-app>
        <div id="preloader">
            <div class="sk-three-bounce">
                <div class="sk-child sk-bounce1"></div>
                <div class="sk-child sk-bounce2"></div>
                <div class="sk-child sk-bounce3"></div>
            </div>
        </div>

        
    </v-app>
</template>
<script>
import axios, { Axios } from 'axios';
export default {
    name: "Post",
    data() {
        return {
            email: '',
            password: ''
        }

    },
    methods: {
        async addUser() {
            let result = await axios.post("https://reqres.in/api/users?page=1", {
                email: this.email,
                password: this.password
            });
            console.warn(result);

        }

    }
}
</script>
<style>
.body {
    padding: 20px;
}
</style>