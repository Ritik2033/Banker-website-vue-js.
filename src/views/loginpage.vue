<template>
    <div class="loginpage">
        <div class="login form" style="position: fixed;">
            <div id="home" class="container">
                <div class="wrapper" style="align-items: center; background-color: rgba(255, 255, 255, 0.4);">
                    <form @submit.prevent="login">
                        <div class="logo-headline" style="text-align: center;">
                            <h1 style="text-align: center;">LOGIN</h1>
                        </div>

                        <div class="input-box">
                            <h2>Welcome to a <span style="color: #fd7e14;">Banker.!</span></h2>
                            <p>Please sign-in to your account</p>
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="email" v-model="email" name="email"
                                style="background-color: transparent; border-radius: 20px;">
                            <p class="error">{{ validationErrors.email }}</p>
                        </div>
                        <div class="input-box">
                            <input type="password" placeholder="Password" v-model="password" name="password"
                                style="background-color: transparent; border-radius: 20px;">
                            <p class="error">{{ validationErrors.password }}</p>
                        </div>
                        <div class="remember-forgot">
                            <label style="background-color: transparent;">
                                <input type="checkbox" style="background-color: transparent;">
                                Remember me
                            </label>
                            <a href="#">Forgot password ?</a>
                        </div>
                        <div class="button">
                            <button type="submit" class="btn" v-on:click="addUser()"
                                style="text-align: left; background-color: #fd7e14; border-radius: 20px;">LOGIN</button>
                            <p style="text-align: center; margin-top: 10px;">New member ?<a href="#" @click="logout"
                                    style="color: red;">Register</a></p>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios, { Axios } from 'axios';
export default {
    name: "loginpage",
    data() {
        return {
            email: "",
            password: "",
            validationErrors: {
                email: "",
                password: "",
            },
            loginStatus: null,
        };
    },
    methods: {
        async login() {
            this.validationErrors.email = "";
            this.validationErrors.password = "";

            if (!this.email.trim()) {
                this.validationErrors.email = "Email is required.";
            }

            if (!this.password.trim()) {
                this.validationErrors.password = "Password is required.";
            }

            if (!this.validationErrors.email && !this.validationErrors.password) {
                console.log("EMAIL:", this.email);
                console.log("PASS:", this.password);
                let result = await axios.post("https://reqres.in/api/login", {
                    email: this.email.trim(),
                    password: this.password.trim(),
                });
                console.log("API Response:", result.data);
                if (result.data.token) {
                    this.loginStatus = "success"; // Set the login status to 'success'
                    console.log("Login successful!");
                    this.$router.push({
                        name: 'web'
                    });
                } else {
                    this.loginStatus = "failure"; // Set the login status to 'failure'
                    console.log("Login failed. Invalid credentials.");
                }
            } else {
                this.loginStatus = null; // Reset the login status if there are validation errors
                console.log("Login failed. Please fix the errors.");
            }
        },



        logout() {
            this.$router.push({ name: "Register" });
        }
    },
};
</script>
  
<style scoped>
.loginpage {
    background: url('./bank22.webp') no-repeat center center fixed;
    background-size: cover;

    /*border-top: 1px solid white;*/
    /*text-align: center !important;*/
    width: 1410px;
    height: 800px;
    /*text-align: center;*/
}

.body {
    padding: 20px;
}

.wrapper .logo-headline h1 {
    padding-left: 180px;
}

.input-box input {
    font-size: 16px;
    width: 100%;
    height: 45px;
    /* background: white; */
    border-radius: 5px;
    border: none;
    outline: none;
    border: 2px solid rgb(135 92 92 / 20%);
}

.input-box input[type="checkbox"] {
    background-color: transparent;
}

#home {
    margin-left: 100%;
}

.button .btn {
    border: 1px solid;
    color: black;
    width: 380px;
    text-align: center;
    padding-left: 170px;
    display: inline-block;
}

.remember-forgot label input {
    background-color: transparent !important;
}

@media (max-width:350px) {
    .register{
        height: 100%;
    }
    
}
</style>