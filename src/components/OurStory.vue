<script>

</script>

<template>
  <div>
    <hr/>
    <br/>
    <h3 id="story">Story</h3>
    <br/>
<section>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <div class="content">
        <h1 id="titlestory">Our Story (💈)</h1>
        <p>The Father Barbershop is an exclusive place for gentlemen which has experts in haircuts and beard grooming. Created in 2002 to change the customer experience in our club.</p>
      </div>
    </div>
  </div>
</section>
   </div>  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
html {
  font-family: "Montserrat";
}
#story{
    font-size: 60px;
    font-weight: bold;
    text-align: center;

}
section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */
}
.left {
  width: 50%;
  height: 600px;
  background: url(../assets/client.jpg)
  no-repeat center / cover;
  border-radius: 8px;
}
.right {
  width: 50%;
  min-height: 400px;
  background-color: #303137;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  color: white;
  margin-left: -150px;
}
.right h1 {
  font-size: 40px;
  font-weight: lighter;
}
#titlestory {
  font-size: 40px;
  font-weight: lighter;
  color:#f3f8f7;
  font-weight: bold;
}
.right p {
  margin: 20px 0;
  font-weight: 500;
  line-height: 25px;
}
.right a {
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  padding: 20px 30px;
  display: inline-block;
  letter-spacing: 2px;
}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
  .left {
    width: 100%;
    height: 400px;
  }
  .right {
    width: 90%;
    margin: 0;
    margin-top: -100px;
  }
}

/* ********************* */
/* This Code is for only the floating card in right bottom corner */
/* ********************** */

@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  padding: 0;
  margin: 0;
  color: var(--color-4);
  text-decoration: none;
}
#webCifar-sidebox {
  position: fixed;
  right: 0px;
  bottom: 0px;
  overflow-x: clip;
  width: 300px;
  font-size: 16px;
}
#webCifar-sidebox p {
  padding: 0;
  margin: 0;
}
#webCifar {
  --color-1: #17bcb4;
  --color-2: #24252a;
  --color-3: #244044;
  --color-4: #f3f8f7;
  background: var(--color-2);
  display: inline-block;
  color: var(--color-4);
  padding: 10px 17px;
  border-radius: 6px;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
  -webkit-transform: translateX(calc(100% + 5px));
  transform: translateX(calc(100% + 5px));
  -webkit-transition: 0.5s ease-out transform;
  transition: 0.5s ease-out transform;
  z-index: 4;
}

#webCifar.active {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

#webCifar .logo {
  font-size: 25px;
}

#webCifar .author {
  margin-top: 10px;
  margin-bottom: 20px;
}

#webCifar .author span {
  background-color: var(--color-3);
  padding: 3px;
  border-radius: 4px;
}

#webCifar .items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

#webCifar .item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-align: left;
}

#webCifar .item:hover {
  background-color: var(--color-3);
}

#webCifar svg {
  max-width: 20px;
}

#webCifar .close {
  position: absolute;
  display: inline-block;
  height: 30px;
  width: 30px;
  right: 5px;
  top: 5px;
  padding: 5px;
  background-color: var(--color-3);
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

#webCifar-icon {
  --color-2: #24252a;
  --color-3: #244044;
  font-family: "Roboto Mono", monospace;
  text-align: left;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: var(--color-2);
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 5px;
  border-radius: 4px;
  gap: 5px;
  margin: 5px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  right: -27%;
  border: 1px solid #ffffff7d;
}

#webCifar-icon svg {
  max-width: 20px;
}
</style>