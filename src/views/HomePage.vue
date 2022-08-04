<template>
  <div class="bg-gray-400">
    <NavbarList />
    <header>
      <div class="banner container h-screen flex pb-10">
        <div class="w-5/12 flex items-center">
          <span class="rotate-90 text-white place-self-end -translate-y-10">Vegan Friendly</span>
          <img src="../assets/image/banner/static.index__message.svg" alt=""  class="mx-auto">
        </div>
        <div class="w-7/12 relative overflow-hidden">
          <ul class="bg-ul flex flex-nowrap absolute">
            <li class="mr-4 bg-pic1">
            </li>
            <li class="mr-4 bg-pic2">
            </li>
            <li class="mr-4 bg-pic3">
            </li>
            <li class="mr-4 bg-pic4">
            </li>
            <li class="mr-4 bg-pic5">
            </li>
          </ul>
          <div class="absolute top-1/4 ml-5 translate-y-full">
            <img src="../assets/image/banner/logo.svg" alt="" class="w-96">
            <img src="../assets/image/banner/static.index__tagline.svg" alt="">
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss">
  $bgurls: (
    'pic1': url('@/assets/image/banner/static.index__slide_1.jpg'),
    'pic2': url('@/assets/image/banner/static.index__slide_2.jpg'),
    'pic3': url('@/assets/image/banner/static.index__slide_3.jpg'),
    'pic4': url('@/assets/image/banner/static.index__slide_4.jpg'),
    'pic5': url('@/assets/image/banner/static.index__slide_5.jpg')
  );
  @each $key, $val in $bgurls {
    .bg-#{$key} {background: $val;}
  }

  .bg-ul > li{
    background-position: center center;
    background-size: cover;
    width: 450px;
    height: 700px;
  }

</style>

<script>
import NavbarList from '@/components/NavbarList.vue'
export default {
  components: {
    NavbarList
  }
}
</script>
