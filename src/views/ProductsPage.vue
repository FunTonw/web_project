<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl animate-topToBottom">P R O D U C T S</h2>
      <div class="animate-bottomToTop">
      <ProductsContant />
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
import ProductsContant from '@/components/ProductsContant.vue'

export default {
  components: {
    NavbarList,
    FooterList,
    ProductsContant
  }
}
</script>
