<script>

</script>

<template>
    <div>
    <hr/>
    <h3 id ="prices">Prices</h3>
    <br/>
    <main class="l-card">
  <section class="l-card__text">
    <p>Fade.......................300$</p>
    <p>Fringe.....................300$</p>
    <p>High Fade................300$</p>
    <p>Medium Fade............350$</p>
    <p>Regular Cut..............250$</p>
    <p>Shave.......................100$</p>
    <p>Electric Stipe Cut......400$</p>
  </section>
</main>
    </div>
</template>

<style>
 @import url("https://fonts.googleapis.com/css2?family=Vollkorn&display=swap");
#prices{
    font-size: 60px;
    font-weight: bold;
    text-align: center;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.l-card {
  width: 475px;
  min-width: 300px;
  max-width: 480px;
  margin-left: 525px;
  height: 475px;
  background: #f5f5f5;
  color: #272727;
  padding: 50px;
  box-shadow: 0px 7px 24px rgba(100, 100, 100, 0.4);
}

.l-card__text p {
  font-size: 30px;
  font-family: "Vollkorn", serif;
  font-weight: 400;
  color: #3f3f55;
  text-align: left;
}

.l-card__text p::after {
  content: "\201D";
  display: inline;
  color: #999;
}

.l-card__text p::before {
  content: "\201C";
  display: inline;
  color: #999;
}

</style>