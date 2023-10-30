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
    :pagination="true"
    :modules="modules"
    :options="swiperOptions"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../assets/images/employee_png/Shoxrux aka.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Shoxruh Egamov</h3>
        <p class="text-[14px]">CEO</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Jamshid.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Jamshid Bahromov</h3>
        <p class="text-[14px]">Software Engineer</p>
      </div>
    </swiper-slide>
      
    <swiper-slide>
      <img src="../assets/images/employee_png/Elbek.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Elbek Suyunov</h3>
        <p class="text-[18px]">Designer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Muzaffar.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Muzaffar Saidaxmedov</h3>
        <p class="text-[18px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Zamon.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Zamon Qahorov</h3>
        <p class="text-[18px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Elyor aka.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Elyor Usmanov</h3>
        <p class="text-[18px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Jasur.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Jasur Raimov</h3>
        <p class="text-[18px]">Software Engineer</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Tolib.png" />
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Tolib</h3>
        <p class="text-[18px]">Sales manager</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/employee_png/Laziz.png"/>
      <div class="text-white rounded-b-[15px] bg-[#343FA7] p-2">
        <h3 class="text-24px font-[700]">Laziz Xojiboyev</h3>
        <p class="text-[18px]">Kontent maker</p>
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
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>
