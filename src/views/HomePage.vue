<template>
  <div class="bg-gray-400">
    <div class="animate-topToBottom">
      <NavbarList />
    </div>
    <header class="pt-28">
      <div class="banner h-screen flex pb-10 relative">
        <div class="w-5/12 flex items-center">
          <span class="rotate-90 text-white place-self-end -translate-y-10 animate-fadeIn_late">Vegan Friendly</span>
          <img src="../assets/image/banner/static.index__message.svg" alt=""  class="mx-auto animate-fadeIn_late">
        </div>
        <div class="w-7/12 relative overflow-hidden">
          <ul class="bg-ul flex flex-nowrap absolute" :style="{transform: `translateX(${bgPicData}px)`}" ref="bgPicList">
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
            <img src="../assets/image/banner/logo.svg" alt="" class="w-96 animate-fadeIn_3" >
            <img src="../assets/image/banner/static.index__tagline.svg" alt="" class="animate-fadeIn_3">
          </div>
        </div>
        <div class="absolute -bottom-10 right-20 z-10">
          <img src="@/assets/image/banner/static.index__scroll.svg" width="170px" alt="" class="animate-scroll">
        </div>
      </div>
    </header>

    <div class="about container mx-auto z-20">
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

    <section class="overflow-hidden my-20">
    <div class="de-banner overflow-hidden">
      <div class="de-banner-bg h-screen w-full flex items-end"
      :style="{transform: `translate3d(0px, ${deBannerDate}px, 0px)`}" ref="deBanner">
      </div>
    </div>
    <div class="-translate-y-36">
      <p class="text-white de-banner-text whitespace-nowrap animate-leftToRight_infinite" >Strawberry. Pistachio. Mango. Coconut. Apple. Cinnamon. Fig. Almond. Orange. Chocolate.</p>
    </div>
    </section>

    <section class="featrue pb-20" ref="featrue">
      <h2 class="text-white py-10 text-sm">FruOats' s Feature</h2>
      <ul class="grid grid-cols-3 gap-3 max-w-screen-lg mx-auto">
        <li class=" bg-white rounded-md">
        <div class="relative">
            <p class="absolute text-white -top-12 left-5" style="font-size: 86px">1</p>
            <img src="../assets/image/feature/static.index__feature_1.jpg" alt="" class="rounded-t-md">
        </div>
          <div class="p-5">
            <h3 class="text-red-600 text-lg font-extrabold">植物由来の素材で<br>からだの中からキレイに</h3>
            <p class="text-sm mt-5 text-left font-semibold">お菓子の材料によく使われる卵やバター、小麦粉、白砂糖は使用せず、オートミール、おからパウダー、チアシード、アマニ、ドライフルーツ、米油など、原材料は全て植物由来の素材を使用しています。また、人工甘味料や保存料も使用せず、からだにやさしいクッキーに仕上げました。</p>
          </div>
        </li>
        <li class=" bg-white rounded-md">
        <div class="relative">
            <p class="absolute text-white -top-12 left-5" style="font-size: 86px">2</p>
            <img src="../assets/image/feature/static.index__feature_2.jpg" alt="" class="rounded-t-md">
        </div>
          <div class="p-5">
            <h3 class="text-red-600 text-lg font-extrabold">3枚で1/2日分の食物繊維<br>糖質も約51%OFF</h3>
            <p class="text-sm mt-5 text-left font-semibold">通常のクッキーと比べて栄養価は一目瞭然！低糖質で食物繊維がたっぷり。ほとんどの日本人が食物繊維不足で、20代~30代の男女で平均約6g不足しています。フルオーツならたった3枚(45g)で、1日に必要な食物繊維の1/2が摂れます。これは、バナナ約9~10本相当分です。</p>
          </div>
        </li>
        <li class=" bg-white rounded-md">
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
    </section>

    <section class="story pb-20 relative" ref="story">
      <div class="story-bg h-screen w-full  flex flex-col justify-between">
      <h2 class="text-white py-10 text-sm">Story / Promise</h2>
        <div class="overflow-hidden">
          <p class="text-white story-text whitespace-nowrap animate-leftToRight_infinite z-10">Story. Promise. Story. Promise. Story. Promise. Story. Promise. Story. Promise. Story. Promise.</p>
        </div>
      </div>
      <div class="absolute gap-5 grid grid-cols-2 w-8/12 right-1/2 top-1/4 translate-x-1/2">
          <div class="text-left text-white mt-20 mb:mt-0 leading-8 text-sm font-bold">
            <h3 class="text-3xl font-black">おいしさとキレイの<br>両立を目指して</h3>
            <p class=" mt-5">「おやつを我慢したくない」をきっかけにスタートしたFruOats(フルオーツ)の開発。ヘルシーと美味しさを両立させるために、通常使用される素材を使わずに、何十回もの試行錯誤を重ねました。</p>
            <button class="rounded-full px-14 py-2 mt-5 bg-white border text-red-400 hover:bg-red-400 hover:text-white ease-in duration-300">誕生ストーリーをみる</button>
          </div>
          <div class="z-20">
            <img src="@/assets/image/story/static.index__story-eyecatch.jpg" alt="" class="rounded-md">
          </div>
      </div>
    </section>

    <section class="product max-w-screen-lg mx-auto py-20" ref="product">
      <h2 class="text-white py-10 text-sm">Product</h2>
      <div class="container flex items-center justify-center">
        <div class="w-5/12 m-10 product-img relative" ref="product_img">
          <img src="@/assets/image/products/main/static.index__product.jpg" alt="" class="rounded-md z-10 relative">
        </div>
        <div class="w-7/12 text-white text-left font-bold flex flex-col justify-content items-center">
        <div>
          <p>オートミール × おからの<br>グルテンフリークッキー</p>
          <h3 class="text-5xl mt-2 font-normal flex items-center">FruOats<span class="ml-2 font-bold place-self-center text-base">フルオーツ</span></h3>
          <p class="mt-10 text-2xl">
            ¥2,960
            <span class="font-normal text-xs text-gray-200">税込</span>
            <span class="text-base ml-5">30枚入り</span>
          </p>
          <button class="bg-white text-sm text-red-400 px-20 py-4 rounded-full mt-10 hover:bg-red-400 hover:text-white ease-in duration-300">商品詳細をみる</button>
        </div>

        </div>
      </div>
    </section>

    <!-- <section class="items" ref="items">
      <div class="max-w-screen-lg mx-auto py-20">
        <ul class="grid grid-cols-4 gap-3">
          <li class="group">
            <a href="#">
              <div class="relative overflow-hidden rounded-md w-60 h-60">
                <img src="@/assets/image/items/1_fa5fe15e-75d8-45e0-8156-29ea083372e9.webp" alt=""  class="absolute group-hover:scale-125 ease-in-out duration-300">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center ">
                    <h5 class="mr-2 text-sm">【定期購入】オートミールクッキー『FruOats（フルオーツ）』5種セット 30枚入り</h5>
                    <p class="text-white">></p>
                  </div>
                  <p class="text-xl">
                    ¥2,664
                    <span class="font-normal text-xs text-gray-200">税込</span>
                  </p>
                </div>

            </a>
          </li>
          <li class="group">
            <a href="#">
              <div class="relative overflow-hidden rounded-md w-60 h-60">
                <img src="@/assets/image/items/4629d09ee093272f99b2a6f7d07e9f05_59137082-f8f2-42a7-816e-365bef03f629.webp" alt=""  class="rounded-md group-hover:scale-125 ease-in-out duration-300">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center">
                    <h5 class="mr-2 text-sm">【定期購入】オートミールクッキー『FruOats（フルオーツ）』アップルシナモン 30枚入り</h5>
                    <p class="text-white">></p>
                  </div>
                  <p class="text-xl">
                    ¥2,664
                    <span class="font-normal text-xs text-gray-200">税込</span>
                  </p>
                </div>

            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <img src="@/assets/image/items/18118f77dc573a6a85cde6f2e14ff456_7056b305-353a-4aad-b219-54ebfc8b19ec.webp" alt=""  class="rounded-md">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center">
                    <h5 class="mr-2 text-sm">【定期購入】オートミールクッキー『FruOats（フルオーツ）』イチジクアーモンド 30枚入り</h5>
                    <p class="text-white">></p>
                  </div>
                  <p class="text-xl">
                    ¥2,664
                    <span class="font-normal text-xs text-gray-200">税込</span>
                  </p>
                </div>

            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <img src="@/assets/image/items/aded710a6b2d6d460c5c2b814015739b_4ed9fe22-ac87-429e-9e91-57fd82c5951e.webp" alt=""  class="rounded-md">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center">
                    <h5 class="mr-2 text-sm">【定期購入】オートミールクッキー『FruOats（フルオーツ）』オレンジチョコレート 30枚入り</h5>
                    <p class="text-white">></p>
                  </div>
                  <p class="text-xl">
                    ¥2,664
                    <span class="font-normal text-xs text-gray-200">税込</span>
                  </p>
                </div>

            </a>
          </li>
        </ul>
        <div class="mt-10 flex justify-end  ">
          <a href="#" class="group flex items-center" ref="itemsButton">
          <p class="text-end text-white mr-3 ">
            Products All
          </p>
          <div class="text-white border border-white group-hover:bg-white group-hover:text-gray-400 rounded-full w-8 h-8 flex justify-center items-center">
          >
          </div>
          </a>
        </div>
      </div>
    </section> -->
    <section class="items" ref="items">
      <ProductsContant :dataItem="productsData" />
    </section>

    <section class="contact py-20 ">
      <div class="relative overflow-hidden"  ref="contact">
        <div class="contact-bg w-9/12 h-screen relative" :style="{transform: `translate3d(0px, ${contactDate}px, 0px)`}">
        </div>
        <div class="absolute top-20 right-52  bg-white p-10" style="width:400px">
          <h3 class="text-sm text-red-400">Shop</h3>
          <h4 class="text-2xl text-red-400 text-start mt-10 font-bold">FruOats FACTORY</h4>
          <div class="mt-10 text-start leading-7 text-sm">
          <p>2022年4月25日(月)よりグランドオープン</p>
          <p class="font-bold">営業時間</p>
          <p>月~金（祝日除く） 11:00~17:00</p>
          <p class="font-bold">店舗所在地</p>
          <p>東京都江東区扇橋1丁目12-20</p>
          </div>
          <button class="mt-10 bg-red-600 text-white px-14 py-3 rounded-full font-bold">もっと詳しく</button>
        </div>
      </div>
    </section>
    <FooterList />
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
  .bg-ul {
    // transition: 1.1s linear;
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
    background-size:cover;
    scale: 1.15;
    transition: 1.1s linear;
  }
  .de-banner-text{
    font-size:110px;
  }
  .featrue{
    transition: 1.1s linear 1;
  }
  .story-text {
    @extend .de-banner-text;
  }
  .story-bg{
    background: url('@/assets/image/story/static.index__story-eyecatch-bg.jpg');
    background-size: cover;
    background-position: center;
  }
  .product-img-style{
    content: '';
    border-radius: 0.375rem;
    position: absolute;
    z-index: 1;
    display: block;
    top: 20%;
    left: 0px;
    width: 100%;
    height: 100%;
    background: url('@/assets/image/products/main/static.index__product-deco_1.jpg');
    background-size: cover;
  }
  .product-img::before{
    transform: rotate(20deg) translateY(-20%);
    @extend .product-img-style;
    z-index: 1;
    // animation: rotate_left 1s linear 1 ;
  }
  .product-img::after{
    transform: rotate(-20deg) translateY(-20%);
    @extend .product-img-style;
    background: url('@/assets/image/products/main/static.index__product-deco_2.jpg');
    background-size: cover;
    z-index: 1;
    // animation: rotate_right 1s linear 1 ;
  }
  .contact-bg{
    background: url('@/assets/image/contact/static.index__shop-eyecatch.webp');
    background-size: cover;
    scale: 1.15;
    transition: 1.1s linear;
    background-position: center center;
  }
  // @keyframes rotate_left {
  //   from { transform: rotate(0deg) translateY(-20%) }
  //   to { transform: rotate(20deg) translateY(-20%) }
  // }
  // @keyframes rotate_right {
  //   from { transform: rotate(0deg) translateY(-20%) }
  //   to { transform: rotate(-20deg) translateY(-20%) }
  // }
</style>

<script>
import NavbarList from '@/components/NavbarList.vue'
import FooterList from '@/components/FooterList.vue'
import ProductsContant from '@/components/ProductsContant.vue'
import { onBeforeUnmount } from 'vue'

export default {
  components: {
    NavbarList,
    FooterList,
    ProductsContant
  },
  data () {
    return {
      productsData: [],
      deBannerDate: 36,
      featrueOffOn: false,
      storyOffOn: false,
      productOffOn: false,
      itemsOffOn: false,
      contactDate: 36,
      bgPicData: 0
    }
  },
  methods: {
    imageScroll () {
      const timer = window.setInterval(() => {
        this.bgPicData -= 1
        if (this.bgPicData <= (-this.$refs.bgPicList.children[0].clientWidth - 16) * 5) {
          this.bgPicData = 0
          const liItem = '<li class="mr-4 bg-pic1"></li><li class="mr-4 bg-pic2"></li><li class="mr-4 bg-pic3"></li><li class="mr-4 bg-pic4"></li><li class="mr-4 bg-pic5"></li><li class="mr-4 bg-pic1"></li><li class="mr-4 bg-pic2"></li><li class="mr-4 bg-pic3"></li><li class="mr-4 bg-pic4"></li><li class="mr-4 bg-pic5"></li>'
          this.$refs.bgPicList.innerHTML = liItem
        }
      }, 30)
      onBeforeUnmount(() => {
        clearInterval(timer)
      })
    },
    scrollListener () {
      const windowHeight = parseInt(window.screen.height) + parseInt(window.scrollY) // 滾動的高度

      // de-banner
      const deBanner = this.$refs.deBanner
      const deBannerHeight = parseInt(deBanner.clientHeight) // 物件高度
      const webTodeBannerTop = parseInt(deBanner.offsetTop) // 網頁 到 物件頂 的高度
      const webTodeBannerBottom = parseInt(deBanner.offsetTop) + deBannerHeight // 網頁 到 物件底 的高度
      const deBannerHelf = webTodeBannerTop + (parseInt(deBanner.clientHeight) / 2) //  網頁 到 物件中間 的高度

      // feature
      const featrue = this.$refs.featrue
      const webToFeatrueTop = parseInt(featrue.offsetTop)

      // story
      const story = this.$refs.story
      const webToStoryTop = parseInt(story.offsetTop)

      // product
      const product = this.$refs.product
      const webToProductTop = parseInt(product.offsetTop)
      const productImg = this.$refs.product_img

      // items
      const items = this.$refs.items
      const webToItemsTop = parseInt(items.offsetTop)

      const contact = this.$refs.contact
      const contactHeight = parseInt(contact.clientHeight) // 物件高度
      const webTocontactTop = parseInt(contact.offsetTop) // 網頁 到 物件頂 的高度
      const webTocontactBottom = parseInt(contact.offsetTop) + contactHeight // 網頁 到 物件底 的高度
      const contactHelf = webTocontactTop + (parseInt(contact.clientHeight) / 2) //  網頁 到 物件中間 的高度

      // 假如滾動高度 等於大於 網頁到物件頂的高度 並且 滾動高度 等於小於 網頁到物件底的高度  background position 位移 Y +
      if (windowHeight >= webTodeBannerTop && windowHeight <= webTodeBannerBottom + 100) {
        // deBanner 的視差距離
        this.deBannerDate = -(windowHeight - deBannerHelf) / 50
      } else if (windowHeight >= webToFeatrueTop && !this.featrueOffOn) {
        // feature 的動畫時機
        this.featrueOffOn = true
        for (let i = 0; i <= featrue.childElementCount; i++) {
          setTimeout(() => {
            featrue.children[1].children[i].classList.add('animate-smooth1')
          }, i * 400)
        }
      } else if (windowHeight >= webToStoryTop && !this.storyOffOn) {
        // story 的動畫時機
        this.storyOffOn = true
        story.children[1].classList.add('animate-smooth_story')
      } else if (windowHeight >= webToProductTop && !this.productOffOn) {
        // product 動畫時機
        this.productOffOn = true
        product.children[1].classList.add('animate-smooth3')
        productImg.classList.add('before:animate-rotate_left')
        productImg.classList.add('after:animate-rotate_right')
      } else if (windowHeight >= webToItemsTop && !this.itemsOffOn) {
        this.itemsOffOn = true
        items.classList.add('animate-smooth1')
      } else if (windowHeight >= webTocontactTop && windowHeight <= webTocontactBottom + 100) {
        this.contactDate = -(windowHeight - contactHelf) / 10
        contact.classList.add('animate-smooth1')
      }
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener)
    this.imageScroll()
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>
