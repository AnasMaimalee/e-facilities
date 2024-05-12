<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
<template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
<div>
  <h3>Hello</h3>
</div>
<div>
  <h3>2</h3>
</div>
<div>
  <h3>three</h3>
</div>
<div>
  <h3>4</h3>
</div>
</a-carousel>

<div class="relative  mt-0 h-full">
  <div class="mt-0 h-full relative">
    <div class="flex">
      <>

    </div> -->

    <!-- services -->
    <div class="flex justify-center items-center  mx-auto">
      <p class="text-2xl md:text-5xl select-none mt-10">Our Services</p>
    </div>
  </div>
</template>
  <script setup lang="ts">
  import { MailOutlined, HomeOutlined, LogoutOutlined, MenuOutlined, InfoCircleOutlined, LoginOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';

  const carouselItems = ref([
    { image: 'https://via.placeholder.com/500', alt: 'Image 1' },
    { image: 'https://via.placeholder.com/500', alt: 'Image 2' },
    { image: 'https://via.placeholder.com/500', alt: 'Image 3' },
  ]);

  let currentIndex = 0;

  const nextSlide = () => {
    if (currentIndex < carouselItems.value.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselItems.value.length - 1;
    }
  };
</script>
  <style scoped>

  /* For demo */
  :deep(.slick-slide) {
    text-align: center;
    /* height: 160px; */
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }

  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }

  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }

  :deep(.slick-slide h3) {
    color: #fff;
  }
</style>