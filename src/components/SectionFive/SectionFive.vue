<template>
    <section id="portfolio">
        <div  class="container mx-auto">
            <div class="text-white  m-[20px] p-2">
                <h1 class="text-[24px] md:text-[40px] lg:text-[56px] font-[700] font-Roboto mb-[8px] md:mb-[16px] lg:mb-[24px]">{{$t('translation.portfolio.title')}}</h1>
                <p class="text-[14px] md:text-[18px] lg:text-[24px] font-[400] font-Roboto mb-[16px] md:mb-[24px] lg:mb-[32px]">{{$t('translation.portfolio.description')}}</p>
            </div>
            <div>
                <Card class="m-[20px]"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Card from "../Card.vue"
</script>

<style lang="scss" scoped>

</style>