<template>
    <v-app>
  
      <v-app-bar app color="white" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="orange--text" font-size="60px" :class="{ 'ml-8': !isMobile }">
          Banker<span style="color: red;">.</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <a href="#"><v-btn text color="orange">Home</v-btn></a>
          <a href="#about"><v-btn text color="black">About Us</v-btn></a>
          <a href="#blog"><v-btn text color="black">Blog</v-btn></a>
          <a href="#contact"><v-btn text color="black">Contact</v-btn></a>
          <a><v-btn text color="black" @click="logout">Log Out</v-btn></a>
          <a href="#"><v-btn icon color="black"><v-icon>mdi-facebook</v-icon></v-btn></a>
          <a href="#"><v-btn icon color="black"><v-icon>mdi-twitter</v-icon></v-btn></a>
          <a href="#"><v-btn icon color="black"><v-icon>mdi-linkedin</v-icon></v-btn></a>
        </v-toolbar-items>
      </v-app-bar>
  
      <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
        <v-list>
          <v-list-item @click="drawer = false" link>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="drawer = false" link>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item @click="drawer = false" link>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
          <v-list-item @click="drawer = false" link>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-facebook</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-twitter</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main class="main-background">
        <div class="main-background_details">
          <div class="main-background_details_l" style="margin-top:200px;">
            <h1 style="font-size: 40px; width: 1400px; font-weight: bold;">BANKING SOLUTIONS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo officiis omnis dicta asperiores ipsum
              quas distinctio voluptatibus quisquam tempore repellat, rem natus, beatae, sint quaerat molestiae. Nesciunt,
              fugit quam?</p>
          </div>
  
  
        </div>
      </v-main>
      <div class="main">
        <div class="main_l">
          <div class="main_l_container">
            <img alt="logo" src="./wallet.svg" width="150" height="100">
            <h3>Money Savings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div class="main_l_container">
            <img alt="logo" src="./cart.svg" width="150" height="100">
            <h3>Online Shoppings</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div class="main_l_container">
            <img alt="logo" src="./credit-card.svg" width="150" height="100">
            <h3>Credit / Debit Cards</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
  
        </div>
        <div class="main_l_l">
          <div class="main_l_l_l">
            <img alt="logo" src="./about_2.jpg.webp" width="450" height="300">
          </div>
          <div class="main_l_l_l" style="padding-top: 20px;">
  
            <h2>Amortization Computation</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul class="list" style="padding-top: 25px;">
              <li style="padding-top: 10px;">Officia quaerat eaque neque</li>
              <li style="padding-top: 10px;">Lorem ipsum dolor sit amet</li>
              <li style="padding-top: 10px;">Consectetur adipisicing elit</li>
  
            </ul>
            <input type="text" placeholder="Enter your email"
              style=" border-color: #fd7e14; width: 300px;height: 40px; border-radius: 30px;" />
            <button type="submit" class="button" placeholder="Submit"
              style=" background: orange; height: 40px; border-radius: 30px;">Submit Email</button>
  
          </div>
        </div>
      </div>
      <div id="about" class="about_us">
        <h1 style="text-align: center; color: #fd7e14; font-size:40px">About Us</h1>
        <p style="text-align: center; font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          minima neque tempora reiciendis.</p>
        <div class="about_us_a">
          <div class="about_us_a_i">
            <img alt="logo" src="./hero_1.jpg.webp" width="500" height="300">
          </div>
          <div class="about_us_a_i">
            <h2 style="font-size: 30px;">We Solve Your Financial Problem</h2>
            <p style="font-size:18px;">Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.</p> <br />
            <p style="font-size:18px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div class="meet_team" style="text-align: center;">
          <h1 style="text-align: center; color: #fd7e14; font-size:40px">Meet Team</h1>
          <p style="text-align: center;">A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <div class="meet_team-a">
            <div class="meet_team_b">
              <img alt="logo" src="./person_5.jpg.webp" width="250" height="250">
              <h3>Kaiara Spencer</h3>
              <p>FINANCE MANAGER</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_6.jpg.webp" width="250" height="250">
              <h3>Dave Simpson</h3>
              <p>MARKETING MANAGER</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_7.jpg.webp" width="250" height="250">
              <h3>Ben Thompson</h3>
              <p>ACCOUNTANT</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_8.jpg.webp" width="250" height="250">
              <h3>Kyla Stewart</h3>
              <p>ACCOUNTANT</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_1.jpg.webp" width="250" height="250">
              <h3>Kaiara Spencer</h3>
              <p>ACCOUNTANT</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_2.jpg.webp" width="250" height="250">
              <h3>Dave Simpson</h3>
              <p>BANK TELLER</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_3.jpg.webp" width="250" height="250">
              <h3>Ben Thompson</h3>
              <p>BANK TELLER</p>
            </div>
            <div class="meet_team_b">
              <img alt="logo" src="./person_4.jpg.webp" width="250" height="250">
              <h3>Chris Stewart</h3>
              <p>BANK TELLER</p>
            </div>
  
          </div>
  
        </div>
        <div id="gallery" class="gallery">
          <h1 style="text-align: center; color: #fd7e14; font-size:40px">Gallery</h1>
          <div class="gallery_image">
            <img alt="logo" src="./about_2.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./img_2.jpg" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./img_3.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./bank22.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./img_5.jpg" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./about_2.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./about_2.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./img_3.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./bank22.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./img_5.jpg" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./about_2.jpg.webp" width="230" height="180" style="margin: 10px;">
            <img alt="logo" src="./about_2.jpg.webp" width="230" height="180" style="margin: 10px;">
  
          </div>
        </div>
        <div class="our_service">
          <h1 style="text-align: center; color: #fd7e14; font-size:40px">Our Service</h1>
          <div class="our_service_a">
            <img alt="logo" src="./wallet.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Business Consulting</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
          <div class="our_service_a">
            <img alt="logo" src="./credit-card.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Credit Card</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
          <div class="our_service_a">
            <img alt="logo" src="./rich.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Income Monitoring</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
          <div class="our_service_a">
            <img alt="logo" src="./notes.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Insurance Consulting</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
          <div class="our_service_a">
            <img alt="logo" src="./cart.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Financial Investment</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
          <div class="our_service_a">
            <img alt="logo" src="./phone.svg" width="100" height="100">
            <h3 style="padding-top: 10px;">Financial Management</h3>
            <p style="padding-top: 10px;">A small river named Duden flows by their place and supplies it with the necessary
              regelialia.</p>
            <a hrfe="#" style="color: #fd7e14;">Learn More</a>
          </div>
  
        </div>
        <div class="frequancy_ask-que" style="margin-top: 40px;">
          <h1 style="text-align: center; color: #fd7e14; font-size:40px">Frequently Ask Questions</h1>
          <div class="frequancy_ask-que_a">
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">Can I accept both Paypal and Stripe?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">Where are you from?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">What available is refund period?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">What is your opening time?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">Can I accept both Paypal and Stripe?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">Can I accept both Paypal and Stripe?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">What available is refund period?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
            <div class="frequancy_ask-que_i">
              <h2 style="float:left">What available is refund period?</h2>
              <p style="float:right">Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.</p>
            </div>
          </div>
          <div class="frequancy_ask-que_b">
            <div class="frequancy_ask-que_b_a">
              <img alt="logo" src="./hero_1.jpg.webp" width="500" height="300">
            </div>
            <div class="frequancy_ask-que_b_a" style="margin-top: 200px;">
              <div style="">
                <h2>Bank Loan</h2>
                <P>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts.</P>
                <a href="" style="color: #fd7e14; text-decoration: none;">Learn More</a>
              </div>
              <div>
                <h2>Banking Consulation</h2>
                <P>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts.</P>
                <a href="" style="color: #fd7e14; text-decoration: none;">Learn More</a>
              </div>
            </div>
          </div>
        </div>
  
      </div>
      <div class="blog" id="blog">
        <h1 style="text-align: center; color: #fd7e14; font-size:40px">Our Blogs</h1>
        <div class="blog_a">
          <img alt="logo" src="./about_2.jpg.webp" width="350" height="250">
          <h3>A Basic Guide to Starting a Franchise in the Philippines</h3>
          <div class="blog_a_b">
            <p style="display: inline-block;"> Ham Brook</p><span>.</span>
            <p style="display: inline-block;"> Jan 18, 2019</p><span>.</span>
            <a href="#" style="color: #fd7e14; display: inline-block; text-decoration: none;">News</a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
            reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <a href="#" style="color: #fd7e14; text-decoration: none;">Continue Reading...</a>
        </div>
        <div class="blog_a">
          <img alt="logo" src="./bank22.webp" width="350" height="250">
          <h3>A Basic Guide to Starting a Franchise in the Philippines</h3>
          <div class="blog_a_b">
            <p style="display: inline-block;"> Ham Brook</p><span>.</span>
            <p style="display: inline-block;"> Jan 18, 2019</p><span>.</span>
            <a href="#" style="color: #fd7e14; display: inline-block; text-decoration: none;">News</a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
            reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <a href="#" style="color: #fd7e14; text-decoration: none;">Continue Reading...</a>
        </div>
        <div class="blog_a">
          <img alt="logo" src="./img_3.jpg.webp" width="350" height="250">
          <h3>A Basic Guide to Starting a Franchise in the Philippines</h3>
          <div class="blog_a_b">
            <p style="display: inline-block;"> Ham Brook</p><span>.</span>
            <p style="display: inline-block;"> Jan 18, 2019</p><span>.</span>
            <a href="#" style="color: #fd7e14; display: inline-block; text-decoration: none;">News</a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis
            reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <a href="#" style="color: #fd7e14; text-decoration: none;">Continue Reading...</a>
        </div>
      </div>
      <div id="contact" class="contact" style="margin-top: 200px;">
        <h1 style="text-align: center; color: #fd7e14; margin-bottom: 100px;">Contact Us</h1>
        <v-row class="icon-row">
          <div class="icon-container" style="text-align: center;">
            <v-icon large color="#fd7e14">mdi-map-marker</v-icon>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div class="icon-container" style="text-align: center;">
            <v-icon large color="#fd7e14">mdi-phone</v-icon>
            <p style="color: #fd7e14;">+1 232 3235 324</p>
          </div>
          <div class="icon-container" style="text-align: center;">
            <v-icon large color="#fd7e14">mdi-email</v-icon>
            <p style="color: #fd7e14;">youremail@domain.com</p>
          </div>
        </v-row>
        <v-container style="background-color: aliceblue;">
          <v-card-title cols="12" md="6">Contact Form</v-card-title>
          <v-form @submit.prevent="submit">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="fname" label="First Name" required
                    :rules="[value => !!value || 'First Name is required']"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="lname" label="last Name" required
                    :rules="[value => !!value || 'last Name is required']"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="subject" label="Subject" required
                    :rules="[value => !!value || 'Subject is required']"></v-text-field>
                </v-col>
              </v-row>
  
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email" required
                    :rules="[value => !!value || 'email is required']"></v-text-field>
                </v-col>
              </v-row>
  
              <v-row>
                <v-col cols="12">
                  <v-textarea v-model="message" label="Message" required :counter="200" maxlength="200"
                    :rules="[value => !!value || 'message is required']"></v-textarea>
                </v-col>
              </v-row>
  
              <v-row>
                <v-col cols="12">
                  <v-btn color="primary" type="submit" @click="submit">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-container>
      </div>
      <div class="footer">
        <div class="footer_a">
          <div class="footer_a_about" style="width: 200px; margin: 100px;">
            <h3 Style=" color:white; ">About</h3>
            <p Style=" color:white; ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem.
              Amet aliquid nesciunt veritatis aliquam.</p>
          </div>
  
          <div class="footer_a_about" style="width: 200px; margin: 100px;">
            <h3 Style=" color:white; ">Quick link</h3>
            <div><a href="#" style="color: aliceblue;"> Home</a></div>
            <div><a href="#about" style="color: aliceblue;"> About Us</a></div>
            <div><a href="#blog" style="color: aliceblue;"> Blog</a></div>
            <div><a href="#contact" style="color: aliceblue;"> Contact</a></div>
          </div>
  
          <div class="footer_a_about"  style="width: 200px; margin: 100px;">
            <h3 Style=" color:white; ">Follow us</h3>
            <a href="#"><v-btn icon color="white"><v-icon>mdi-facebook</v-icon></v-btn></a>
            <a href="#"><v-btn icon color="white"><v-icon>mdi-twitter</v-icon></v-btn></a>
            <a href="#"><v-btn icon color="white"><v-icon>mdi-instagram</v-icon></v-btn></a>
            <a href="#"><v-btn icon color="white"><v-icon>mdi-linkedin</v-icon></v-btn></a>
          </div>
        </div>
  
        <div class="footer_b">
          <hr style="color: blue; border-width: 1px; margin-top: 20px; margin-bottom: 20px; width: 80%; margin-left: 160px;">
          <p style="color: aliceblue; text-align: center;">Copyright ©2023 All rights reserved | This template is made with  by <v-icon color="red">mdi-heart</v-icon> Colorlib</p>
        </div>
      </div>
  
    </v-app>
  </template>

<script>

export default {
  name: 'web',

  data: () => ({
    drawer: false,
    isMobile: false,

  }),
  created() {
    this.isMobile = window.innerWidth < 768; // Set initial mobile status based on screen size
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth < 768;
    },

    logout() {
        this.$router.push({ name: "loginpage" });
    }

  },
};
</script>

<style>
.main-background {
  background: url('./bank22.webp') no-repeat center center fixed;
  background-size: cover;

  border-top: 1px solid white;
  text-align: center !important;
  width: 100%;
  height: 800px;
  text-align: center;

}

.v-application--wrap {
  min-height: 100vh;
}

.v-toolbar__title {
  font-size: 2.0rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main-background_details {
  width: 569.984px;
  text-align: center !important;
}

.main-background_details_l {

  transform: translate(0);
  transition-duration: .8s;
  transition-property: opacity, transform;
  text-align: center !important;
  display: inline-block !important;

}

.main-background_details h1 {
  font-size: 2rem;
  color: #fff;
  font-weight: 1000;
}

.main-background_details p {
  font-size: 1rem;
  color: #fff;
  font-weight: 1000;
}

.main_l_container {
  width: 300px;
  height: 300px;
  background: transparent;
  text-align: center;
  margin: 5%;
  padding: 20px;
  display: inline-block;

}

.main_l_l_l {
  width: 450px;
  height: 300px;
}

.main_l_l {
  display: flex;
  justify-content: space-around;
}

.button {
  background: #fd7e14;
  border-color: #fd7e14;
  color: #fff;
  font-size: 16px;
  border-radius: 30px;
  padding: 10px 30px;
  background-color: #fd7e14;
  border-color: #fd7e14;


  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
}

.about_us {
  margin-top: 300px;
}

.about_us_a_i {
  width: 500px;
  height: 350px;
  display: inline-block;
  margin-top: 40px;
  margin-left: 80px;
}

.meet_team {
  margin-top: 250px;
}

.our_service {
  align-items: center;
}

.our_service_a {
  width: 300px;
  height: 300px;
  background: transparent;
  margin-top: 2%;
  margin-left: 10%;
  display: inline-block;
}

.frequancy_ask-que_a {
  margin-top: 100px;
  text-align: center;
  align-items: center;
  background: #ffffff;

}

.frequancy_ask-que_i {
  display: inline-block;
  justify-content: space-around;
  width: 550px;
  height: 150px;
  background: transparent;
  margin: 1%;
}

.frequancy_ask-que_b_a {
  display: inline-block;
  width: 500px;
  height: 300px;
  margin-left: 100px;
}

.blog {
  margin-top: 100px;

}

.blog_a {
  width: 350px;
  display: inline-block;
  margin: 50px;
}

.icon-row {
  justify-content: space-around;
}

.meet_team_a {
  align-items: center;
}

.meet_team_b {
  display: inline-block;
  margin: 20px;
}

.gallery_image {
  display: inline-block;
  text-align: center;
  justify-content: space-around;
  margin: 100px;
}

.footer {

  margin-top: 100px;
  width: 100%;
  height: 800px;
  background-color: #343a40;
}

.footer_a_about{
  display: inline-block;
}
</style>
