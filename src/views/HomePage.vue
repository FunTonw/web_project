<template>
  <div class="bg-gray-400">
    <NavbarList />
    <header>
      <div class="banner h-screen flex pb-10 relative">
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
        <div class="absolute -bottom-10 right-20 z-10">
          <img src="@/assets/image/banner/static.index__scroll.svg" width="170px" alt="">
        </div>
      </div>
    </header>
    <div class="about container mx-auto px-10">
      <div class="about-bg w-full h-screen relative">
        <h2 class="text-red-400 pt-10 font-bold text-sm">About FruOats</h2>
        <div class="
        bg-white
        absolute -bottom-60 left-40 z-10
        rounded-md
        px-10 py-20
        font-bold
        leading-loose
        text-start text-sm text-red-600">
            <h3 class="text-3xl">我慢しなくていい<br>キレイのためのおやつ</h3>
            <br>
            <p>健康や美容への意識が高まるなか、</p>
            <p>なるべくヘルシーなおやつを選んだり、</p>
            <p>おやつを我慢する人が増えています。</p>
            <br>
            <p>私たちは、どなたでもおやつ時間を</p>
            <p>罪悪感なく楽しく過ごしていただけるよう、</p>
            <p>植物由来のシンプルな素材のみを厳選して</p>
            <p>FruOats（フルオーツ）を開発しました。</p>
            <br>
            <p>スーパーフードとして注目されているオートミールや</p>
            <p>チアシードのほか、おからやドライフルーツなどを使った、</p>
            <p>食物繊維・ビタミン・ミネラルたっぷりの</p>
            <p>グルテンフリークッキーです。</p>
            <br>
            <p>おいしさとキレイを両立させる、</p>
            <p>嬉しいおやつをどうぞ召し上がれ。</p>
        </div>
      </div>
    </div>
    <!-- 以下的圖片 要做簡易的視差滾動 -->
    <div class="relative">
      <div class="de-banner w-srceen h-screen mt-20">
      </div>
      <div class="absolute w-full -bottom-5 de-banner-text z-10" >
        <p class="text-white">Strawberry. Pistachio. Mango. Coconut. Apple. Cinnamon. Fig. Almond. Orange. Chocolate.</p>
      </div>
    </div>

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
  .about-bg{
    background: url('@/assets/image/about_img/static.index__about.webp');
    background-position: center center;
    background-size: cover;
  }
  .de-banner{
    background: url('@/assets/image/about_img/static.index__eyecatch.jpg');
    background-position: center center;
    background-size:120%;
  }
  .de-banner-text > p{
    font-size:110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
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
