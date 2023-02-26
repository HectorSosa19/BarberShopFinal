<script>
import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";
import axios from "axios";
const Url_Api = "https://localhost:7182/api/TypeHairCut";

export default {
  data() {
    return {
      TypeHairCuts: [],
      id: 0,
      name: "",
      photo: "",
      duration: "",
      price: "",
      description: "",
    };
  },
  components: { NavBar, Logo },
  mounted() {
    axios.get(Url_Api).then((response) => (this.TypeHairCuts = response.data));
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Logo />
    <hr />
    <div class="main">
      <h1 id="titlecut">Types Of Haircuts</h1>
      <div class="row">
        <div class="cardsList">
          <v-container class="grey lighten-5">
            <v-row>
              <v-col
                v-for="types in TypeHairCuts"
                v-bind:key="types.Id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card max-width="374" class="color-card">
                  <v-img height="500" :src="types.photo"></v-img>
                  <v-card-title>Name Of Haircut: {{ types.name }}</v-card-title>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-text>
                    <p>Duration: {{ types.duration }}</p>
                    <p>Price: {{ types.price }}</p>
                    <p>Description: {{ types.description }}</p>
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
#titlecut {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
}

@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");

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
  font-family: "Quicksand", serif;
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