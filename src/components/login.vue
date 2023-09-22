<template>
    <div id="home" class="container" >
        <div class="wrapper">
            <form action="" @submit="login">
                <div class="logo-headline">
                    <img alt="logo" src="./siddhatech.png" width="150" height="50">
                    <h1>Kass</h1>
                </div>
                <div class="input-box">
                    <h2>Welcome!</h2>
                    <p>Please sign-in to your account</p>
                </div>
                <div  class="input-box">
                    <input type="test" placeholder="Username" v-model="username" name="username">
                    <p class="error">{{ validationErrors.username }}</p>
                </div>
                <div  class="input-box">
                    <input type="password" placeholder="Password" v-model="password" name="password" >
                    <p class="error">{{ validationErrors.password }}</p>
                </div>
                <div  class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password ?</a>
                </div>
            </form>
            <div class="button">
                <button   @click="login" type="submit" class="btn">LOGIN</button>
            </div>
           
        </div>
    
    </div>
    </template>
    <script>
    
    export default {
        name:'home',
        data(){
           return{
            username: '',
                password: '',
                validationErrors: {
                    username: '',
                    password: '',
                },
               
           }
        },
    
       methods :{
            login()
            {
               
                this.validationErrors.username = '';
                this.validationErrors.password = '';
    
                if (!this.username.trim()) {
                    this.validationErrors.username = 'Username is required.';
                }
    
                if (!this.password.trim()) {
                    this.validationErrors.password = 'Password is required.';
                }
    
                if (!this.validationErrors.username && !this.validationErrors.password) {
                    if (this.username.trim() === 'admin' && this.password.trim() === 'admin') {
                        console.log('Login successful!');
            
                    } else {
                        console.log('Login failed. Invalid credentials.');
             
                    }
                }    
                else {
                    console.log('Login failed. Please fix the errors.');
          
                }
            }
       }
       
       
    }
    </script>
    
    <style scoped>
    #home{
    
        top: 100%;
        left: 100%;
        margin: 0%;
        padding: 0%;
        justify-content: center;
        align-items: center;
        
    }
    
    .wrapper .logo-headline{
        display: flex;
    }
    .wrapper .logo-headline  img{
        padding-top: 10%;
        padding-left: 15%;
    }
    .wrapper .logo-headline  h1{
        padding-left: 15%;
    }
    .wrapper{
        margin-top: 25%;
        top: 50%;
        left: 50%;
        /*background-color: white;*/
        width: 450px;
        color: black;
        border-radius: 5px;
        box-shadow: 0px 8px 16px 7px rgba(0, 0, 0, 0.3);
        
    
    }
    
    .wrapper h1{
        padding-top: 23px;
        text-align: right;
        font-weight: normal;
        text-align: center;
    }
    .wrapper h2{
        text-align: left;
        font-weight: normal;
        padding: 0%;
        margin: 0%;
    }
    .wrapper p{
        text-align: left;
        padding: 1%;
        margin: 0%;
    }
    .wrapper .input-box{
        width: 90%;
        margin: 20px 20px;
        background: salmon;
        background: transparent;
        border:  normal ;
        
        outline: none;
        border-radius: 5px;
        font-size: 16px;
    }
    .input-box input {
        
        font-size: 16px;
        width: 100%;
        height: 45px;
       /* background: white;*/
        border-radius: 5px;
        border: none;
        outline: none;
        border: 2px solid rgb(135 92 92 / 20%);
        
    }
    
    .input-box input::placeholder{
        color: black;
        font-size: 16px;
        padding: 10px 25px 10px 10px;
    }
    
    .wrapper .remember-forgot{
        display: flex;
        justify-content: space-between;
        font-size: 15.5px;
        margin: 30px 20px;
    }
    .remember-forgot label input{
        margin-right: 5px;
        /*accent-color: blue;*/
        background-color: transparent;
    }
    
    .remember-forgot a {
        text-align: left;
        color: red;
        text-decoration: none;
    }
    .error {
        color: red;
        font-size: medium;
        display: flex;
    }
    .button{
        text-align: left;
        padding-bottom: 10px;
    }
    
    .wrapper .btn{
        
        width: 25%;
        height: 35px;
        margin: 30px 20px;
        padding: 0%;
       /* background: red;
        /*color: #fff;*/
        border: none;
        outline: none;
        border-radius: 20px;
        font-size: 14px;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        
    
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
    </style>