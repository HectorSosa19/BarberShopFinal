<script >
import axios from 'axios'
import NavBar from '../components/NavBar.vue'
import Logo from '../components/Logo.vue'
const Url_Barber = "https://localhost:7182/api/BarberProfile";
const Url_User = "https://localhost:7182/api/Auth";
export default {
  data() {
    return {
      Users:[],
      name:'',
      lastName:'',
      email:'',
      phone:'',
      gender:'',
      BarberProfile: [],
      todoItem: {},
      CreatedBy: "true",
      UpdatedBy: "true",
      Id: 0,
      experience: 0,
      isAvailable: '',
      seatNum: 0,
      imageFile: '',

    }
  },
  mounted() {
    axios.get(Url_Barber).then((response) => (this.BarberProfile = response.data));
    axios.get(Url_User).then((response) => (this.Users = response.data));
  },
  methods: {}

  , components: {
    NavBar,
    Logo
  }
}
</script>

<template>
  <div>
    <NavBar />
    <Logo />
    <hr />
    <div class="main">
      <h1 id="titlebarber">Barbers</h1>
      <div class="cardsList">
        <div>

          <!-- cards  -->
          <v-container class="grey lighten-5">
            <v-row>
              
              <v-col v-for="barber in BarberProfile" v-bind:key="barber.Id" cols="12" sm="6" md="4" >
                <v-card max-width="374">
                  <v-img height="250" :src='barber.imageFile'></v-img>
                  <v-card-title>Experience: {{ barber.experience }} Years</v-card-title>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-text>
                    <p>Available: {{ barber.isAvailable }}</p>
                    <p>Number Seat: {{ barber.seatNum }}</p>
                  </v-card-text>
                </v-card>
                </v-col>

            </v-row>
          </v-container>

        </div>
      </div>
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

#titlebarber {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
}

body {
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

@media (max-width: 576px) {
  .card {
    margin: 0 auto;
  }
}

.made_by {
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}
</style>