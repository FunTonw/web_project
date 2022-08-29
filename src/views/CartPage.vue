<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
        <div class="mt-56">
      <h2 class="text-white fond-bold text-5xl">T O P</h2>
      <div v-if="cartsData.length <= 0">
        <p class="text-white text-2xl py-20">カートは空です</p>
        <router-link to="/products">
          <button class="bg-white text-sm text-red-400 px-20 py-4 rounded-full hover:bg-red-400 hover:text-white ease-in duration-300">
            買い物を続ける
          </button>
        </router-link>
      </div>
      <div v-else>
        <div class="flex items-center justify-center mt-20 mx-auto max-w-screen-lg text-white">
          <table class="w-full">
            <thead class="border-b-2">
              <tr class="text-xs">
                <th class="w-10/12 py-5" colspan="2">商品名</th>
                <th class="w-1/12">價格</th>
                <th class="w-1/12">數量</th>
              </tr>
            </thead>
            <tbody class="border-b-2">
              <tr v-for="product, key in cartsData" :key="key"
              class="border-b border-current-white-200">
                <td class="w-1/12 py-5" style="height: 80px">
                  <router-link :to="`/itempage/${product.product.id}`">
                    <img :src="product.product.imgUrl[0]" alt="">
                  </router-link>
                </td>
                <td>
                  <div class="text-start font-bold px-5">
                    <p>{{ product.product.name}}</p>
                    <!-- 這邊綁一個mutation -->
                    <button class="border rounded-full px-3 py-1 mt-1 text-xs" @click="delCart(product.product.id)">
                      <span class="mr-1">x</span>
                      <span>刪除</span>
                    </button>
                  </div>
                </td>
                <td>¥{{product.total}}</td>
                <td class="px-5">
                  <div class="bg-white text-black flex items-center justify-center rounded">
                    <p class="mr-2">{{product.qty}}</p>
                    <div class="flex flex-col justify-center items-center text-xs text-gray-600">
                      <button @click="this.addCart(product.product)">▲</button>
                      <button v-if="product.qty <= 1" disabled>▼</button>
                      <button v-else @click="minusCart(product.product)">▼</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-end pt-5 text-xl" colspan="4">
                  <span class="text-sm mr-3">小計:</span>
                  <span>¥{{cartsTotal}}</span>
                  <p class="text-xs mt-5">（税込価格）</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
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
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    NavbarList,
    FooterList
  },
  computed: {
    ...mapState({
      cartsData: state => state.carts.data
    }),
    ...mapGetters([
      'cartsTotal'
    ])
  },
  methods: {
    ...mapMutations([
      'addCart',
      'minusCart',
      'delCart'
    ])
  }
}
</script>
