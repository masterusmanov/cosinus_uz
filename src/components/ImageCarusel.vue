<template>
   <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="false"
    :modules="modules"
    :options="swiperOptions"
    class="mySwiper"
    :autoplay="{ delay: 2000 }"
  >
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Shoxrux aka.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Shoxruh Egamov</h3>
        <p class="text-[14px]">CEO</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Jamshid.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Jamshid Bahromov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
      
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Elbek.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Elbek Suyunov</h3>
        <p class="text-[14px]">Designer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Muzaffar.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[16px] font-[700]">Muzaffar Saidaxmedov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Zamon.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Zamon Qahorov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Elyor aka.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Elyor Usmanov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Jasur.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Jasur Raimov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_pngs/Laziz.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-[18px] font-[700]">Laziz Xojiboyev</h3>
        <p class="text-[14px]">Kontent maker</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  import '../assets/style.css';

  // import required modules
  import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination, Autoplay],
      };
    },
  };
</script>

<style scoped>

</style>