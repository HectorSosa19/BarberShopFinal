<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";

//Get Data
const Url_Appointment = "https://localhost:7182/api/Appointment";
const Url_BarberProfile = "https://localhost:7182/api/BarberProfile";
const Url_Invoice = "https://localhost:7182/api/Invoice";
const Url_Review = "https://localhost:7182/api/Review";
const Url_TypeHairCut = "https://localhost:7182/api/TypeHairCut";
const Url_Auth = "https://localhost:7182/api/Auth";

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      Auth: [],
      id: 0,
      name: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      username: "",
      password: "",
      userRoles:0,

      BarberProfile: [],
      id: 0,
      experience: 0,
      seatNum: 0,
      isAvailable: true,
      imageFile: "",
      idUser: 0,

      Appointment: [],
      id: 0,
      idBarberProfile: 0,
      idTypeHairCut: 0,
      idUser: 0,
      isCancelled: false,
      dateHour: "",

      Invoice: [],
      id: 0,
      date: "",
      total: "",
      details: "",
      idTypeHairCut: 0,

      Review: [],
      id: 0,
      rating: 0,
      comments: "",
      idBarberProfile: 0,

      TypeHairCut: [],
      id: 0,
      name: "",
      photo: "",
      duration: "",
      price: 0,
      description: "",
    };
  },
  mounted() {
    axios.get(Url_Auth).then((response) => (this.Auth = response.data));
    axios
      .get(Url_Appointment)
      .then((response) => (this.Appointment = response.data));
    axios
      .get(Url_BarberProfile)
      .then((response) => (this.BarberProfile = response.data));
    axios.get(Url_Invoice).then((response) => (this.Invoice = response.data));
    axios.get(Url_Review).then((response) => (this.Review = response.data));
    axios
      .get(Url_TypeHairCut)
      .then((response) => (this.TypeHairCut = response.data));
  },
  components: {
    NavBar,
    Logo,
  },
  methods: {
     async AddUser() {
  try {
    Swal.fire({
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
    })
    const user = await axios.post(
      "https://localhost:7182/api/Auth/AddRolesWithAdmin", 
      {
        id:this.id,
        createdBy:this.createdBy,
        updatedBy:this.updatedBy,
        name: this.name,
        lastName:this.lastName,
        email:this.email,
        username:this.username,
        password:this.password,
        phone:this.phone,
        gender:this.gender,
        userRoles:this.userRoles,
      }
    );

    console.log(user)
  } catch(e) {
    console.log(e);
  }
},
},
};
</script>

<template>
  <div>
    <NavBar />
    <Logo />
    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID User</th>
          <th scope="col">Name</th>
          <th scope="col">LastName</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">User Role</th>
        </tr>
      </thead>
      <tbody v-for="user in Auth" v-bind:key="user.id">
        <th>{{ user.id }}</th>
        <th>{{ user.name }}</th>
        <th>{{ user.lastName }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.phone }}</th>
        <th>{{ user.gender }}</th>
        <th>{{ user.username }}</th>
        <th>{{ user.password }}</th>
        <th>{{ user.userRoles }}</th>
        

        <tr></tr>
      </tbody>
    </table>

            <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Upd.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add User
        </v-card-title>
        <v-text-field label="Name" lenght="30" placeholder="Your Name" v-model="name" ></v-text-field>
        <v-text-field label="LastName" lenght="30"  placeholder="Your LastName" v-model="lastName"></v-text-field>
        <v-text-field label="Email" lenght="60"  placeholder="Your Email" v-model="email"></v-text-field>
        <v-text-field label="Phone" type="number" lenght="10"  placeholder="Your Phone" v-model="phone" ></v-text-field>
        <v-text-field label="Gender" lenght="1"  placeholder="Your Gender(M/F)" v-model="gender"></v-text-field>
        <v-text-field label="Username" lenght="30"  placeholder="Your Username" v-model="username"></v-text-field>
        <v-text-field label="Password" type="password"  placeholder="Your Password" v-model="password"></v-text-field>
        <v-text-field label="UserRoles" type="number"  placeholder="Your Password" v-model="userRoles"></v-text-field>
        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog = false"
              >Close</v-btn>
              <v-btn 
              depressed
               @click="AddUser">
                  Add
                </v-btn>
            </v-card-actions>
                
            
      </v-card>
    </v-dialog>
  </div>
    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID Barber</th>
          <th scope="col">Experience</th>
          <th scope="col">Seat Num</th>
          <th scope="col">ID User</th>
          <th scope="col">Image File</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="barber in BarberProfile" v-bind:key="barber.id">
        <th>{{ barber.id }}</th>
        <th>{{ barber.experience }}</th>
        <th>{{ barber.seatNum }}</th>
        <th>{{ barber.idUser }}</th>
        <th><img :src="barber.imageFile" width="150" height="150" /></th>
        <th>

          <div class="text-center">
    <v-dialog
      v-model="dialog2"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Edit.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add Barber
        </v-card-title>
        <v-text-field label="Experience" type="number"></v-text-field>
        <v-text-field label="Seat Num" type="number"></v-text-field>
        <v-text-field label="ID User" type="number"></v-text-field>
        <v-text-field label="Image File"></v-text-field>

        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog2 = false"
              >Close</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </th>
        <tr></tr>
      </tbody>
    </table>
    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID Appointment</th>
          <th scope="col">ID Barber</th>
          <th scope="col">ID TypeHairCut</th>
          <th scope="col">ID User</th>
          <th scope="col">Is Cancelled</th>
          <th scope="col">Date & Hour</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="appoint in Appointment" v-bind:key="appoint.id">
        <th>{{ appoint.id }}</th>
        <th>{{ appoint.idBarberProfile }}</th>
        <th>{{ appoint.idTypeHairCut }}</th>
        <th>{{ appoint.idUser }}</th>
        <th>{{ appoint.isCancelled }}</th>
        <th>{{ appoint.dateHour }}</th>
        <th>
          
          <div class="text-center">
    <v-dialog
      v-model="dialog3"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Upd.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add Appointment
        </v-card-title>
        <v-text-field label="ID Barber" type="number"></v-text-field>
        <v-text-field label="ID TypeHairCut" type="number"></v-text-field>
        <v-text-field label="ID User" type="number"></v-text-field>
        <v-text-field label="Cancelled?" type="boolean"></v-text-field>
        <v-text-field label="Date & Hour" type="DateTime"></v-text-field>

        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog3 = false"
              >Close</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

        </th>
        <tr></tr>
      </tbody>
    </table>
    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID Invoice</th>
          <th scope="col">Date</th>
          <th scope="col">Total</th>
          <th scope="col">Details</th>
          <th scope="col">ID TypeHairCut</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="invo in Invoice" v-bind:key="invo.id">
        <th>{{ invo.id }}</th>
        <th>{{ invo.date }}</th>
        <th>{{ invo.total }}</th>
        <th>{{ invo.details }}</th>
        <th>{{ invo.idTypeHairCut }}</th>
        <th>

          <div class="text-center">
    <v-dialog
      v-model="dialog4"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Upd.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add Invoice
        </v-card-title>
        <v-text-field label="Date"></v-text-field>
        <v-text-field label="Total"></v-text-field>
        <v-text-field label="Details"></v-text-field>
        <v-text-field label="ID TypeHairCut"></v-text-field>
        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog4 = false"
              >Close</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </th>
        <tr></tr>
      </tbody>
    </table>

    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID review</th>
          <th scope="col">Rating</th>
          <th scope="col">Comments</th>
          <th scope="col">ID Barber</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="revi in Review" v-bind:key="revi.id">
        <th>{{ revi.id }}</th>
        <th>{{ revi.rating }}</th>
        <th>{{ revi.comments }}</th>
        <th>{{ revi.idBarberProfile }}</th>
        <th>

<div class="text-center">
    <v-dialog
      v-model="dialog5"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Upd.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add Review
        </v-card-title>
        <v-text-field label="Rating" type="number"></v-text-field>
        <v-text-field label="Comments"></v-text-field>
        <v-text-field label="ID Barber" type="number"></v-text-field>
        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog5 = false"
              >Close</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

        </th>
        <tr></tr>
      </tbody>
    </table>
    <hr />
    <table class="table table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID TypeHairCut</th>
          <th scope="col">Name</th>
          <th scope="col">Photo</th>
          <th scope="col">Duration</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="hair in TypeHairCut" v-bind:key="hair.id">
        <th>{{ hair.id }}</th>
        <th>{{ hair.name }}</th>
        <th><img :src="hair.photo" width="150" height="150" /></th>
        <th>{{ hair.duration }}</th>
        <th>{{ hair.price }}</th>
        <th>{{ hair.description }}</th>
        <th>

          <div class="text-center">
    <v-dialog
      v-model="dialog6"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Add.
        </v-btn>
        
        <v-btn
          class="mx-2"
          fab
          dark
          color="error"
          v-bind="attrs"
          v-on="on"
        >
        Del.
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
        Upd.
        </v-btn>
        
      </template>
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add TypeHairCut
        </v-card-title>
        <v-text-field label="Name"></v-text-field>
        <v-text-field label="Photo"></v-text-field>
        <v-text-field label="Duration"></v-text-field>
        <v-text-field label="Price" type="number"></v-text-field>
        <v-text-field label="Description"></v-text-field>
        <v-text-field label="Username"></v-text-field>
        <v-text-field label="Password"></v-text-field>
        <v-divider></v-divider>
             <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog6 = false"
              >Close</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </th>
        <tr></tr>
      </tbody>
    </table>


  </div>
</template>

<style>

table {
  margin-left: 30px;
}

</style>