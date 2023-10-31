<template>
<div class="container mx-auto">
  <div class="faders">
    <div class="left"></div>
    <div class="right"></div>
  </div>

  <div class="items ">
    <div class="entry">
      <img src="../assets/images/brand/1.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/2.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/3.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/4.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/5.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/6.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
        <img src="../assets/images/brand/7.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/1.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/2.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/3.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/4.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/5.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
      <img src="../assets/images/brand/6.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
    <div class="entry">
        <img src="../assets/images/brand/7.svg" alt="Smiling person" class="w-[120px] h-[48px] md:w-[120px] md:h-[64px] lg:w-[200px] lg:h-[100px]"/>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Muli:400,700&display=swap");

body {
  margin: 0;
  height: calc(100vh - 8em);
  font-family: "Muli", sans-serif;
}

h1 {
  text-align: center;
  margin: 1.5em;
}



.container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.items {
  display: flex;
  align-items: center;
  width: fit-content;
  animation: carouselAnim 20s infinite alternate linear;
}

.entry {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 250px;
  margin: 1em;
  padding: 0.5em;
  background-color: #16163A;
  
}

@media only screen and (max-width: 768px) {
  .items {
    animation: carouselAnim 20s infinite alternate linear;
  }
  
  @keyframes carouselAnim {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(calc(-100% + (2 * 300px)));
    }
  }
}

.entry p {
  text-align: center;
  padding: 1em;
}

.name {
  font-weight: bold;
}

@keyframes carouselAnim {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(calc(-100% + (5 * 300px)));
  }
}

.container .faders {
  width: 100%;
  position: absolute;
  height: 100%;
}

.faders .right,
.faders .left {
  width: 15%;
  height: 100%;
  position: absolute;
  z-index: 200;
}

.right {
  right: 0;
}

</style>