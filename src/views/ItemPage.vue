<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="bg-white my-40 py-20 rounded-md max-w-screen-xl mx-auto ">
      <div class="grid grid-cols-2 gap-5 p-28">
        <div>
          <div class="items-img w-full h-screen mx-auto" ref="itemsImg" :style="`background-image: url(${product.imgUrl[0]})`">
          </div>
          <div>
            <ul class="flex mt-3">
              <li @click="selectImg(img)" style="heigth: 200px; width: 100px" class="mr-3" v-for="img, key in product.imgUrl" :key='key'>
                <img :src="img" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="font-bold text-start">
          <h2 class="text-2xl mb-5">{{product.name}}</h2>
          <p class="text-2xl mb-5">¥{{product.price}}
            <span class="text-sm">税込</span>
          </p>
          <button class="bg-red-500 text-white w-full mb-20 p-5 rounded-md">【Amazon Pay対応】30秒で購入</button>
          <div class="font-normal text-sm leading-6">
            <p>＜賞味期限＞発送日より <span>{{product.contant.expiryDate}}</span></p>
            <p>＜外箱サイズ＞ <span>{{product.contant.boxSize}}</span></p>
            <p>＜包装＞<span>{{product.contant.packing}}</span></p>
            <p>＜配送方法＞<span>{{product.contant.shipping}}</span></p>
            <p>＜配送料＞<span>{{product.contant.deliveryPay}}</span></p>
            <p>＜保存方法＞<span>{{product.contant.storeMethod}}</span></p>
            <p class="text-red-600">ずっと10%OFFで買える定期購入はこちら</p>
          </div>
          <div class="mt-10">
            <i class="text-gray-400 text-sm font-normal">2022年6月に原材料のバージョンアップを行いました。</i>
          </div>
          <div>
            <ul>
              <li class="border-b py-5">
                <h3 class="mb-5">特定原材料・原材料</h3>
                <div class="font-normal">
                【特定原材料】<br>
                <p class="mb-5">
                  <span v-for="material, key in product.materials.material" :key="key">
                    {{material}}．
                  </span>
                </p>
                <br>
                【原材料】<br>
                 <span v-for="raw, key in product.materials.rawMaterial" :key="key">
                  {{raw}}．
                 </span>
                <br>
                ※本品製造工場では、小麦を含む製品を生産しています。
                </div>
              </li>
              <li class="py-5">
                <h3 class="mb-5">栄養成分表示（1枚あたり）</h3>
                <p class="font-normal">
                エネルギー：52.1kcal<br>
                タンパク質：1.0g<br>
                脂質：2.5g<br>
                糖質：4.6g<br>
                食物繊維：3.7g<br>
                食塩相当量：0.0g
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ItemIntro />
    </div>
    <FooterList />
  </div>
</template>

<style lang="scss">
  .items-img {
    max-width: 100%;
    height: 30vw;
    background-position: center center;
    background-size: cover;
  }
</style>

<script>

import NavbarList from '@/components/NavbarList.vue'
import FooterList from '@/components/FooterList.vue'
import ItemIntro from '@/components/ItemsIntro.vue'
export default {
  components: {
    NavbarList,
    FooterList,
    ItemIntro
  },
  // 這邊有出錯, 若在本頁重整就會出錯, 應該是組件在渲染上的先後順序導致
  computed: {
    product () {
      const productItem = this.$store.state.productsdata.find(x => x.id === parseInt(this.$route.params.id))
      return productItem
    }
  },
  methods: {
    selectImg (img) {
      this.$refs.itemsImg.style.backgroundImage = `url(${img})`
    }
  }
}
</script>
