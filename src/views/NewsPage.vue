<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl animate-topToBottom">N E W S</h2>
      <ul class="news_page_list text-xl text-xl font-bold text-white w-9/12 mx-auto mt-20 border-b-2 border-white-100 animate-bottomToTop">
        <li class=" border-t-2 border-white-100">
          <a href="#">
            <div class="flex py-5">
              <p class="mr-10">2022.06.27</p>
              <p>我們已獲得日本 NPO Veggie Project 的素食認證標誌！</p>
            </div>
          </a>
        </li>
        <li class=" border-t-2 border-white-100">
          <a href="#">
            <div class="flex py-5">
              <p class="mr-10">2022.06.23</p>
              <p>從 2022 年 6 月 20 日開始，將為所有產品舉辦限時 10% 折扣活動。</p>
            </div>
          </a>
        </li>
        <li class=" border-t-2 border-white-100">
          <a href="#">
            <div class="flex py-5">
              <p class="mr-10">2022.06.20</p>
              <p>發表於《雷》2022年8月號！</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-40">
      <FooterList />
    </div>
  </div>
</template>

<style lang="scss">
  .news_page_list > li{
    position: relative;
  }
  .news_page_list > li::after{
    content: '>';
    color: white;
    position: absolute;
    transform: translateY(75%);
    top: -0%;
    right: 2%;
  }
</style>

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
