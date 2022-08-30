<template>
  <div class="bg-gray-400">
  <div>
      <NavbarList />
  </div>
  <div class=" h-screen flex flex-col items-center justify-center">
    <div>
      <h1 class="text-start text-5xl font-bold text-sky-50 mb-5">LOGIN</h1>
      <form action="login" class=" bg-white flex flex-col p-20 max-w-screen-sm rounded-md">
        <div class="mb-5">
          <label for="username" class="mr-2 text-sm">帳號</label>
          <input type="text" id="username" class="border border-gray-400 rounded-sm">
        </div>
        <div class="mb-5">
          <label for="password" class="mr-2 text-sm">密碼</label>
          <input type="text" id="password" class="border border-gray-400 rounded-sm">
        </div>
        <button class="text-white bg-red-400 rounded-full py-1">登入</button>
      </form>
    </div>
  </div>
  <div>
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
