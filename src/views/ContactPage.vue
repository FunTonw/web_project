<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl mb-20 animate-topToBottom">S H O P</h2>
      <div class=" animate-bottomToTop">
        <div class="w-7/12 mx-auto bg-white rounded-xl">
          <div><img src="@/assets/image/contact/static.index__shop-eyecatch.webp" alt="" class="rounded-t-xl"></div>
          <div class="p-20">
            <h3 class="text-3xl text-red-600 font-bold mb-10">FruOats FACTORY</h3>
            <p class="text-start">店頭ではFruOatsとコーヒー、オーガニックフルーツジュースを販売しています。
              <br>
              2022年4月25日（月）よりグランドオープン。（2022年3月23日にプレオープン）
            </p>
            <div class="my-20">
              <dl class="flex mt-5">
                <dt class="font-bold w-2/12 text-start">営業時間</dt>
                <dd class="flex">
                  <p>月~日（水曜除く） 11:00~17:00</p>
                </dd>
              </dl>
              <dl class="flex mt-5">
                <dt class="font-bold w-2/12 text-start">店舗所在地</dt>
                <dd class="flex flex-col items-start">
                  <p>東京都江東区扇橋1丁目12-20</p>
                  <button class="text-white text-sm font-bold bg-red-400 px-2 py-1 mt-2 rounded-md">
                    Google map
                  </button>
                </dd>
              </dl>
              <dl class="flex mt-5">
                <dt class="font-bold w-2/12 text-start">アクセス</dt>
                <dd class="flex flex-col items-start">
                  <p>東京メトロ半蔵門線/住吉駅 徒歩9分</p>
                  <p>都営大江戸線/清澄白河駅 徒歩12分</p>
                </dd>
              </dl>
            </div>
            <div class="text-red-400 text-xl ">FOLLOW ME</div>
          </div>
        </div>
      </div>

    </div>
    <router-link to="/">
      <button class="mt-20 px-20 py-3 text-white font-bold border-2 border-white rounded-full">
        TOPページへ
      </button>
    </router-link>
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
