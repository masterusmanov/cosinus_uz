<script setup>
  import Header from "../components/Header.vue"
  import SectionOne from "../components/SectionOne/SectionOne.vue";
  import SectionTwo from "../components/SectionTwo/SectionTwo.vue";
  import SectionThree from "../components/SectionThree/SectionThree.vue";
  import SectionFour from "../components/SectionFour/SectionFour.vue";
  import SectionFive from "../components/SectionFive/SectionFive.vue";
  import SectionSix from "../components/SectionSix/SectionSix.vue";
  import SectionSeven from '../components/SectionSeven/SectionSeven.vue';
  import SectionEight from "../components/SectionEight/SectionEight.vue";
  import SectionNine from '../components/SectionNine/SectionNine.vue';
  import Footer from "../components/Footer.vue";
</script>

<template>
  <Header/>
  <SectionOne class="lg:mt-[100px]"/>
  <SectionTwo class="lg:mt-[100px]"/>
  <SectionThree class="md:mt-[100px] lg:mt-[100px]"/>
  <SectionFour class="md:mt-[50px] lg:mt-[70px]"/>
  <SectionFive class="mt-[50px] md:mt-[100px] lg:mt-[100px]"/>
  <SectionSix class="mt-[50px] md:mt-[100px] lg:mt-[150px]"/>
  <SectionSeven class="mt-[50px]"/>
  <SectionEight class="mt-[50px] lg:mt-[100px]"/>
  <SectionNine />
  <Footer class="mt-[50px] lg:mt-[100px]"/>

</template>

<style lang="scss" >
  *{
    scroll-behavior: smooth;
  }
</style>
