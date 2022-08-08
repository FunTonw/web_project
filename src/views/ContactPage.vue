<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl">C O N T A C T</h2>
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
