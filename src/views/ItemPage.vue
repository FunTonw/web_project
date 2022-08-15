<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="bg-white my-40 py-20 rounded-md max-w-screen-xl mx-auto ">
      <div class="grid grid-cols-2 gap-5 p-28">
        <div>
          <div class="items-img w-full h-screen mx-auto">
          </div>
          <div>
            <ul class="flex mt-3">
              <li style="heigth: 200px; width: 100px" class="mr-3">
                <img src="../assets/image/items/item1/aded710a6b2d6d460c5c2b814015739b_8f7e2ee4-d51c-4225-b9c1-54ad42b2177b_1000x1000.webp" alt="">
              </li>
              <li style="heigth: 200px; width: 100px">
                <img src="../assets/image/items/item1/f579bbdfe2052cdd1da1bff67288b4c9_65abf815-5ac8-4135-9b7f-94d703d7d70b_1000x1000.webp" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="font-bold text-start">
          <h2 class="text-2xl mb-5">オートミールクッキー『FruOats（フルオーツ）』ストロベリーピスタチオ 30枚入り</h2>
          <p class="text-2xl mb-5">¥2,960
            <span class="text-sm">税込</span>
          </p>
          <button class="bg-red-500 text-white w-full mb-20 p-5 rounded-md">【Amazon Pay対応】30秒で購入</button>
          <div class="font-normal text-sm leading-6">
            <p>＜賞味期限＞発送日より <span>約4週間~6週間</span></p>
            <p>＜外箱サイズ＞ <span>310×226x高さ23</span></p>
            <p>＜包装＞<span>枚ずつ個包装</span></p>
            <p>＜配送方法＞<span>注文日の翌々日まで（土日祝日を除く）にゆうパケットにて発送</span></p>
            <p>＜配送料＞<span>送料無料</span></p>
            <p>＜保存方法＞<span>直射日光・高温多湿を避けて保存してください（夏場は、冷蔵or冷凍保存を推奨）</span></p>
            <p class="text-red-600">ずっと10%OFFで買える定期購入はこちら</p>
          </div>
          <div class="mt-10">
            <i class="text-gray-400 text-sm font-normal">2022年6月に原材料のバージョンアップを行いました。</i>
          </div>
          <div>
            <ul>
              <li class="border-b py-5">
                <h3 class="mb-5">特定原材料・原材料</h3>
                <p class="font-normal">
                【特定原材料】<br>
                人工甘味料・保存料・小麦粉・バター・卵不使用
                <br>
                【原材料】<br>
                水溶性食物繊維（国内生産）、おからパウダー、ドライストロベリー、本和香糖（沖縄県産さとうきび）、米油、オートミール、ピスタチオ、アマニ、チアシード
                <br>
                ※本品製造工場では、小麦を含む製品を生産しています。
                </p>
              </li>
              <li class="py-5">
                <h3 class="mb-5">栄養成分表示（1枚あたり）</h3>
                <p class="font-normal">
                エネルギー：52.1kcal<br>
                タンパク質：1.0g<br>
                脂質：2.5g<br>
                糖質：4.6g<br>
                食物繊維：3.7g<br>
                食塩相当量：0.0g
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ItemIntro />
    </div>
    <FooterList />
  </div>
</template>

<style lang="scss">
  .items-img {
    max-width: 100%;
    height: 30vw;
    background: url('@/assets/image/items/item1/aded710a6b2d6d460c5c2b814015739b_8f7e2ee4-d51c-4225-b9c1-54ad42b2177b_1000x1000.webp');
    background-position: center center;
    background-size: cover;
  }
</style>

<script>

import NavbarList from '@/components/NavbarList.vue'
import FooterList from '@/components/FooterList.vue'
import ItemIntro from '@/components/ItemsIntro.vue'
export default {
  components: {
    NavbarList,
    FooterList,
    ItemIntro
  }
}
</script>
