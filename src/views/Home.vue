<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import NavShort from '../components/NavShort.vue';
import Logo from '../components/Logo.vue';
import Slider from '@/components/Slider.vue';
import OurStory from '../components/OurStory.vue';
import Services from '../components/Services.vue';
import Prices from '../components/Prices.vue';
import Contact from '../components/Contact.vue';

export default {
  name:'Home',
  components:{
    NavBar,
    Footer,
    NavShort,
    Logo,
    Slider,
    OurStory,
    Services,
    Prices,
    Contact
}
}
</script>

<template>
  <div id = "app">
    <NavBar/>
    <Logo/>
    <NavShort/>
    <Slider/>
     <OurStory/>
     <Services/>
     <Prices/>
     <Contact/>
  <Footer/>
</div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>