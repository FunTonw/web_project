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
        <h2 class="text-red-400 pt-10 text-sm">About FruOats</h2>
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
    <div class="de-banner relative mb-20">
      <div class="de-banner-bg w-srceen h-screen mt-20">
      </div>
      <div class="absolute w-full -bottom-5 de-banner-text z-10" >
        <p class="text-white">Strawberry. Pistachio. Mango. Coconut. Apple. Cinnamon. Fig. Almond. Orange. Chocolate.</p>
      </div>
    </div>
    <div class="featrue">
      <h2 class="text-white py-10 text-sm">FruOats' s Feature</h2>
      <ul class="flex flex-wrap justify-center">
        <li class="w-3/12 bg-white rounded-md mx-1">
        <div class="relative">
            <p class="absolute text-white -top-12 left-5" style="font-size: 86px">1</p>
            <img src="../assets/image/feature/static.index__feature_1.jpg" alt="" class="rounded-t-md">
        </div>
          <div class="p-5">
            <h3 class="text-red-600 text-lg font-extrabold">植物由来の素材で<br>からだの中からキレイに</h3>
            <p class="text-sm mt-5 text-left font-semibold">お菓子の材料によく使われる卵やバター、小麦粉、白砂糖は使用せず、オートミール、おからパウダー、チアシード、アマニ、ドライフルーツ、米油など、原材料は全て植物由来の素材を使用しています。また、人工甘味料や保存料も使用せず、からだにやさしいクッキーに仕上げました。</p>
          </div>
        </li>
        <li class="w-3/12 bg-white rounded-md mx-1">
        <div class="relative">
            <p class="absolute text-white -top-12 left-5" style="font-size: 86px">2</p>
            <img src="../assets/image/feature/static.index__feature_2.jpg" alt="" class="rounded-t-md">
        </div>
          <div class="p-5">
            <h3 class="text-red-600 text-lg font-extrabold">3枚で1/2日分の食物繊維<br>糖質も約51%OFF</h3>
            <p class="text-sm mt-5 text-left font-semibold">通常のクッキーと比べて栄養価は一目瞭然！低糖質で食物繊維がたっぷり。ほとんどの日本人が食物繊維不足で、20代~30代の男女で平均約6g不足しています。フルオーツならたった3枚(45g)で、1日に必要な食物繊維の1/2が摂れます。これは、バナナ約9~10本相当分です。</p>
          </div>
        </li>
        <li class="w-3/12 bg-white rounded-md mx-1">
        <div class="relative">
            <p class="absolute text-white -top-12 left-5" style="font-size: 86px">3</p>
            <img src="../assets/image/feature/static.index__feature_3.jpg" alt="" class="rounded-t-md">
        </div>
          <div class="p-5">
            <h3 class="text-red-600 text-lg font-extrabold">現役パティシエ監修により<br>満足度95%※の美味しさを実現！</h3>
            <p class="text-sm mt-5 text-left font-semibold">美味しく食べていただくために、「クープ・デュ・モンド・ドゥ・ラ・パティスリー」をはじめとする、パティシエの国際大会で優勝経験のある中山和大シェフに監修して頂きました。美味しい健康食品を作ることの難しさを痛感しながらも、栄養素や素材などに一切妥協せず、美味しく作り上げるために幾度の試行錯誤を重ねました。
              <br><span class="text-xs">（※2021年9月調査 モニター41人）</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="h-screen w-screen bg-gray-400"></div>
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
  .de-banner-bg{
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
