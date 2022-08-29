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
    <div class="flex">
      <p class="mr-4">Login</p>
      <div>
        <router-link to="/cart">cart</router-link>
      </div>
    </div>
  </div>
</div>

</template>
