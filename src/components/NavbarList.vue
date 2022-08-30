<template>
<div class="fixed bg-gray-400 z-50 w-screen">
  <div class="flex justify-between items-center p-10 text-white font-bold">
    <ul class="flex">
        <li class="mr-4">
          <router-link to="/">Top</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/story">商業故事</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/products">商品一覽</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/news">最新消息</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/contact">聯絡我們</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/itempage/1">
            測試按鈕
          </router-link>
        </li>
    </ul>
    <div class="absolute left-1/2 -translate-x-1/2">
      <router-link to="/">
        <img src="../assets/image/banner/logo.svg" alt="">
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <router-link to="/login">
        <p class="mr-4">Login</p>
      </router-link>
      <router-link to="/cart">
        <div class="relative">
          <img src="https://cdn.shopify.com/s/files/1/0553/5131/2591/t/12/assets/static.shared__icon-cart_or.svg?v=105545836874067162481647354270" alt="" class="bg-white rounded-full p-1">
          <div class="text-xs bg-red-600 rounded-full absolute -top-1 -right-1/4 flex justify-center items-center" style="height: 1.5rem; width: 1.5rem">
            <p>{{cartsCount}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartsCount'
    ])
  }
}
</script>
