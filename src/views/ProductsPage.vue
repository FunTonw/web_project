<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl">P R O D U C T S</h2>
      <div class="max-w-screen-lg mx-auto py-20 animate-animate-bottomToTop_1s">
        <ul class="grid grid-cols-4 gap-x-3 gap-y-20">
          <li>
            <a href="#">
              <div>
                <img src="@/assets/image/items/1_fa5fe15e-75d8-45e0-8156-29ea083372e9.webp" alt="">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center">
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
          <li>
            <a href="#">
              <div>
                <img src="@/assets/image/items/4629d09ee093272f99b2a6f7d07e9f05_59137082-f8f2-42a7-816e-365bef03f629.webp" alt="">
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
                <img src="@/assets/image/items/18118f77dc573a6a85cde6f2e14ff456_7056b305-353a-4aad-b219-54ebfc8b19ec.webp" alt="">
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
                <img src="@/assets/image/items/aded710a6b2d6d460c5c2b814015739b_4ed9fe22-ac87-429e-9e91-57fd82c5951e.webp" alt="">
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
          <li>
            <a href="#">
              <div>
                <img src="@/assets/image/items/aded710a6b2d6d460c5c2b814015739b_4ed9fe22-ac87-429e-9e91-57fd82c5951e.webp" alt="">
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
      </div>
    </div>
    <div class="mt-40">
      <FooterList />
    </div>
  </div>
</template>

<script>

import NavbarList from '@/components/NavbarList.vue'
import FooterList from '@/components/FooterList.vue'
export default {
  components: {
    NavbarList,
    FooterList
  }
}
</script>
