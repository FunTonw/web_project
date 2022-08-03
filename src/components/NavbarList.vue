<template>
  <div class="flex justify-between items-center p-10 bg-gray-400 text-white font-bold">
    <ul class="flex">
        <li class="mr-4">
          <router-link to="/">Top</router-link>
        </li>
        <li class="mr-4">
          <router-link to="/about">商業故事</router-link>
        </li>
        <li class="mr-4">商品一覽</li>
        <li class="mr-4">最新消息</li>
        <li class="mr-4">聯絡我們</li>
    </ul>
    <div class="absolute left-1/2 -translate-x-1/2">
      <router-link to="/">
        <img src="../assets/image/banner/logo.svg" alt="">
      </router-link>
    </div>
    <div class="flex">
      <p class="mr-4">Login</p>
      <div>
        <a href="#">cart</a>
      </div>
    </div>
  </div>
</template>
