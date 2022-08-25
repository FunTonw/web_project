<template>
      <section class="items" ref="items">
      <div class="max-w-screen-lg mx-auto py-20">
        <ul class="grid grid-cols-4 gap-3">
          <li class="group">
            <a href="#">
              <div class="relative overflow-hidden rounded-md w-60 h-60">
                <img src="@/assets/image/items/1_fa5fe15e-75d8-45e0-8156-29ea083372e9.webp" alt=""  class="absolute group-hover:scale-125 ease-in-out duration-300">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center ">
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
        </ul>
        <div class="mt-10 flex justify-end">
          <a href="#" class="group flex items-center">
          <p class="text-end text-white mr-3 ">
            Products All
          </p>
          <div class="text-white border border-white group-hover:bg-white group-hover:text-gray-400 rounded-full w-8 h-8 flex justify-center items-center">
          >
          </div>
          </a>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ['dataItem'],
  data () {
    return {
      homepage: [],
      itemspage: []
    }
  },
  watch: {
    dataItem () {
      this.itemspage = this.dataItem
      for (let i = 0; i < 4; i++) {
        this.homepage.concat(this.dataItem[i])
      }
      console.log(this.homepage)
      console.log(this.$route)
    }
  }
}
</script>
