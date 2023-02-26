<script>
export default {
  data(){
    return{
      items: [
          {
            src:require('../assets/img1.jpg'),
          },
          {
            src: require('../assets/img2.jpg'),
          },
          {
            src: require('../assets/img3.jpg'),
          },
          {
            src: require('../assets/img4.jpg'),
          },
          {
            src: require('../assets/img5.jpg'),
          },
          {
            src: require('../assets/img6.jpg'),
          },
          {
            src: require('../assets/img7.jpg'),
          },
          {
            src: require('../assets/img8.jpg'),
          },
        ],
    }
  }
}
</script>

<template>
<div>
    <h1 id="welcome">Welcome</h1>
    <br/>
  <v-carousel
  cycle
  hide-delimiter-background
  height="800"
  show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition">
    >
    <v-row
          class="fill-height title"
          align="center"
          justify="center"
        >
        </v-row>
    </v-carousel-item>
  </v-carousel>
          
</div>
</template>

<style>
#welcome{
  font-size: 60px;
    font-weight: bold;
    text-align: center;
}

</style>