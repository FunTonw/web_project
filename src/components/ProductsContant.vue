<template>
      <section class="items" ref="items">
      <div class="max-w-screen-lg mx-auto py-20">
        <ul class="grid grid-cols-4 gap-x-5 gap-y-5">
          <li class="group" v-for="item, key in products" :key="key">
            <router-link :to="'/itempage/' + item.id">
              <div class="relative overflow-hidden rounded-md w-60 h-60">
                <img :src="item.imgUrl[0]" alt=""  class="absolute group-hover:scale-125 ease-in-out duration-300">
              </div>
                <div class="text-white font-bold text-start mt-3">
                  <div class="flex items-center ">
                    <h5 class="mr-2 text-sm">{{item.name}}</h5>
                    <p class="text-white">></p>
                  </div>
                  <p class="text-xl">
                    ¥{{item.price}}
                    <span class="font-normal text-xs text-gray-200">税込</span>
                  </p>
                </div>
            </router-link>
          </li>
        </ul>
        <div class="mt-10 flex justify-end" v-if="this.togglePage === 'home'">
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
  data () {
    return {
      togglePage: 'home'
    }
  },
  computed: {
    products () {
      if (this.togglePage === 'home') {
        return this.$store.state.productsdata.slice(0, 4)
      } else {
        return this.$store.state.productsdata
      }
    }
  },
  methods: {
    toggleButton () {
      this.togglePage = this.$route.name === 'home' ? 'home' : 'else'
    }
  },
  created () {
    this.toggleButton()
  }
}
</script>
