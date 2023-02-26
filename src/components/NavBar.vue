<template>
<div>
<div>
         <!-- NavBar -->
        <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img 
                    src="../assets/barbershop.png"
                >
            </b-navbar-item>
        </template>
        <template #start class="navbar">
            <b-navbar-item>
            <b-navbar-item>
            <router-link to='/Appointment'>Add Appointment |</router-link> 
            </b-navbar-item>
                <router-link to='/TypeHairCut'>Types Of Haircuts |</router-link>
            </b-navbar-item>
            <b-navbar-item>
            <router-link to='/BarberList'>Barber List |</router-link> 
            </b-navbar-item>
            <b-navbar-item>
            <router-link to='/Map'>Location</router-link> 
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                        <a href="/Login">
                            <img id = "user" src="../assets/user (3).png"/>
                        </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    </div>
</div>
</template>

<script>

</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
*{
    padding: 0;
    margin:0;
    font-family: 'Josefin Sans', sans-serif;
}
.navbar{
    padding: -30px;
    margin: 10px;
    margin-left: 30px;
}
</style>