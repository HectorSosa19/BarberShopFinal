<script>

</script>
<template>
    <div>
        <hr/>
        <br/> 
        <h1 id="service">Services</h1>
       <div class="button-images">
        <div class="one_fourth">
        	<div class="button-container">
       		  <a href="#">HAIRCUTS</a>
           		<img src="../assets/circle1.jpg"/>
            </div>
        </div>    
          <div class="one_fourth">
        	<div class="button-container">
       		  <a href="#">SHAVES</a>
           		<img src="../assets/circle2.jpg" />
            </div>
        </div>
           <div class="one_fourth">
        	<div class="button-container">
       		  <a href="#">BEERS</a>
          <div class="button-image"><img src="../assets/circle3.jpg"/></div>
            </div>
        </div>
           <div class="one_fourth last">
        	<div class="button-container">
       		  <a href="#">ENTERTAINMET</a>
           		<img src="../assets/circle4.jpg"/>
            </div>
        </div>

	<div class="clearboth"></div>
    </div>
    <br/>
    <br/> 
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
#service{
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    
}
body {
  font-size: 16px;
  font-family:'Source Sans Pro';
}

.button-images {
max-width: 950px;
margin: 75px auto;
}

.button-container {
position: relative;
text-align: center;
padding: 0;
border-radius:50%; 
overflow:hidden; 
}

.button-container A:before{  
  content: '';
  display: inline-block;
  height: 48%; 
  }


.button-container a {
  transition: all 1s ease-out;
  background: rgba(88, 88, 88, 0.7);
   border-radius:50%; vertical-align:middle;
  padding:5%; 
  color: #FFFFFF;
  position:absolute;
  font-size: 1.125em; 
  font-weight: 700; 
  top: 0;
  left:0;
  right:0;
  bottom:0;
  width:90%;
  display:inline-block;
  text-decoration: none;
  text-transform:uppercase;
}

.button-container A:hover {
  background: none;
  border: none; 
  opacity:0;
}
.button-container img{width:100%; height:auto; display:block}


/*Columns*/
.one_half, .one_third, .two_third, .three_fourth, .one_fourth, .one_fifth, .two_fifth, .three_fifth, .four_fifth, .one_sixth, .five_sixth {
position: relative;
margin-right: 4%;
float: left;
min-height: 1px;
height: auto !important;
}

.one_fourth {
width: 22%;
}

.three_fourth {
width: 74%;
}

.one_fifth {
width: 16.8%;
}

.two_fifth {
width: 37.6%;
}

.three_fifth {
width: 58.4%;
}

.four_fifth {
width: 79.2%;
}

.one_sixth {
width: 13.3333%;
}

.three_sixth {
width: 47.9998%;
}

.five_sixth {
width: 82.6665%;
}

.last {
margin-right: 0 !important;
clear: right;
}

.clearboth {
clear: both;
display: block;
font-size: 0;
height: 0;
line-height: 0;
width: 100%;
}

.spacer {
height: 15px;
}

.one_half .one_half {
margin-right: 8.3333%;
width: 45.8333%;
}

.one_half .one_third {
margin-right: 8.3333%;
width: 27.7778%;
}

.one_half .two_third {
margin-right: 8.3333%;
width: 63.8889%;
}

.two_third .one_third {
margin-right: 6.1224%;
width: 29.2517%;
}

.two_third .two_third {
margin-right: 6.1224%;
width: 64.6258%;
}

.two_third .one_fourth {
margin-right: 6.1224%;
width: 20.4082%;
}

.one_half, .two_fourth {
width: 48%;
}

.one_third, .two_sixth {
width: 30.6666%;
}

.two_third, .four_sixth {
width: 65.3332%;
}
</style>