<template>
    <v-app>
        <div class="register">
            <div class="box">
                <form @submit.prevent="register">
                    <div class=" heading">
                        <h1>Registration</h1>
                    </div>
                    <div class="input-box">
                        <h2>Welcome to a <span style="color: #fd7e14;">Banker.!</span></h2>
                        <p style="color: none;">Please create your account</p>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Enter First name" v-model="fname" name="fname" />
                        <p class="val">{{ validationErrors.fname }}</p>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Enter Last name" v-model="lname" name="lname" />
                        <p class="val">{{ validationErrors.lname }}</p>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Enter email" v-model="email" name="email" />
                        <p class="val">{{ validationErrors.email }}</p>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Enter password" v-model="password" name="password" />
                        <p class="val">{{ validationErrors.password }}</p>
                    </div>
                    <div class="check-box">
                        <input type="checkbox" class="check-box-a">
                        <p class="check-box-a" >I agree to the <span>term and condition</span></p>
                    </div>
                    <div class="input-box">
                        <button class="btn" type="submit" >Register</button>
                    </div>
                </form>
                <div class="input-box" style=" text-align: center;">
                    <p class="input-box-l">Already have an Account ?</p><a href="#" class="input-box-l" @click="login"
                        style="color: red;">Login</a>

                </div>

            </div>
        </div>
        
    </v-app>
</template>
<script>
import axios, { Axios } from 'axios';
export default {
    name: "Register",
    data() {
        return {
            fname: "",
            lname: "",
            email: "",
            password: "",
            validationErrors: {
                fname: "",
                lname: "",
                email: "",
                password: "",
            },
        }

    },
    methods: {
        async register() {
            this.validationErrors.fname = "";
            this.validationErrors.lname = "";
            this.validationErrors.email = "";
            this.validationErrors.password = "";

            if (!this.fname.trim()) {
                this.validationErrors.fname = "First name is required.";
            }

            if (!this.lname.trim()) {
                this.validationErrors.lname = "Last name is required.";
            }

            if (!this.email.trim()) {
                this.validationErrors.email = "Email is required.";
            }

            if (!this.password.trim()) {
                this.validationErrors.password = "Password is required.";
            }


            if ( !this.validationErrors.fname && !this.validationErrors.lname && !this.validationErrors.email && !this.validationErrors.password) {
                let result = await axios.post("https://reqres.in/api/register", {
                    email: this.email.trim(),
                    password: this.password.trim(),
                });
                console.log("API Response:", result.data);
                if (result.data.token) {
                    this.loginStatus = "success"; // Set the login status to 'success'
                    console.log("Login successful!");
                    
                    this.$router.push({
                        name: 'loginpage'
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

        login() {
            this.$router.push({ name: "loginpage" });
        }

    }
}
</script>
<style>
.register {
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



.box {
    background-color: rgba(255, 255, 255, 0.4);
    width: 500px;
   
    margin-top: 20px;
    padding: 20px;

    position: fixed;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading {
    text-align: center;
}

.input-box {
    width: 90%;
    margin: 20px;
    border-radius: 20px;
}

.input-box input {
    font-size: 16px;
    width: 100%;
    height: 45px;
    background: transparent;
    border-radius: 20px;
    border: none;
    outline: none;
    border: 2px solid rgb(135 92 92 / 20%);
}

.input-box .btn {
    border: 1px solid;
    color: black;
    width: 100%;
    height: 35px;
    text-align: center;
    background-color: rgb(253, 126, 20);
    ;
    border-radius: 20px;
    margin-top: 20px;
}

.check-box-a {
    display: inline-block;
    margin-left: 5px;
}

.check-box-a span {
    color: rgb(253, 126, 20);
}

.input-box-l {
    display: inline-block;
    text-align: center;
    padding-left: 10px;
}

.check-box {
    margin-left: 10px;
}
.input-box .val{
    color: red;
}
</style>