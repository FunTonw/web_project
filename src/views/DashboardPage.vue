<template>
  <div class="bg-gray-400 h-screen flex max-x-screen-lg p-10">
    <div class="w-4/12 bg-white rounded-md mx-5 p-5 overflow-auto">
      <div>
        <h2 class="text-3xl font-bold">編輯</h2>
        <form class="edit_form p-5">
          <div class="flex justify-between mb-2">
          <label for="product_name">產品名稱</label>
          <input type="text" id="product_name" class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="product_img">圖片網址</label>
          <input type="text" class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="product_boxsize">外箱サイズ</label>
          <input type="text" id="product_boxSize"  class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="deliveryPay">配送料</label>
          <input type="text" id="deliveryPay"  class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="expiryDate">賞味期限</label>
          <input type="text" id="expiryDate"  class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="packing">包装</label>
          <input type="text" id="packing"  class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="shipping">配送方法</label>
          <input type="text" id="shipping"  class="border-2 rounded-md">
          </div>
          <div class="flex justify-between mb-2">
          <label for="storeMethod">保存方法</label>
          <input type="text" id="storeMethod" class="border-2 rounded-md">
          </div>
          <div>
            <h3 class="my-5 text-xl font-bold">栄養成分表示（1枚あたり）</h3>
            <div class="grid gap-5 grid-cols-2 text-start">
              <div class="flex justify-between">
                <label for="kcal">エネルギー</label>
                <input type="text" id="kcal" class="border-2 rounded-md" placeholder="kcal" size="5">
              </div>
              <div class="flex justify-between">
                <label for="protein">タンパク質</label>
                <input type="text" id="protein" class="border-2 rounded-md" placeholder="g" size="5">
              </div>
              <div class="flex justify-between">
                <label for="fat">脂質</label>
                <input type="text" id="fat" class="border-2 rounded-md" placeholder="g" size="5">
              </div>
              <div class="flex justify-between">
                <label for="carbohydrate">糖質</label>
                <input type="text" id="carbohydrate" class="border-2 rounded-md" placeholder="g" size="5">
              </div>
              <div class="flex justify-between">
                <label for="fiber">食物繊維</label>
                <input type="text" id="fiber" class="border-2 rounded-md" placeholder="g" size="5">
              </div>
              <div class="flex justify-between">
                <label for="salt">食塩相当量</label>
                <input type="text" id="salt" class="border-2 rounded-md" placeholder="g" size="5">
              </div>
            </div>
          </div>
          <div>
            <h3 class="my-5 text-xl font-bold">特定原材料・原材料</h3>
            <div>
              <div class="flex justify-between items-start mb-3">
                <label for="material">特定原材料</label>
                <div>
                  <input type="text" id="material" class="border-2 rounded-l-md" size="8">
                  <button type="button" class="border-2 border-red-400 rounded-r-sm bg-red-400 text-white hover:bg-red-600 hover:border-red-600 px-1">加入</button>
                  <div class="flex">
                    <div class="text-xs mt-1 mr-3">
                      <div class="flex items-center">
                        <button type="button" class="rounded-full bg-red-400 hover:bg-red-600 mr-1 relative" style="width: 13px; height: 13px;">
                          <span class="absolute -top-1/4 right-1/4 text-white">x</span>
                        </button>
                        <span>讚讚欸廖</span>
                      </div>
                    </div>
                    <div class="text-xs mt-1">
                      <div class="flex items-center">
                        <button type="button" class="rounded-full bg-red-400 hover:bg-red-600 mr-1 relative" style="width: 13px; height: 13px;">
                          <span class="absolute -top-1/4 right-1/4 text-white">x</span>
                        </button>
                        <span>讚讚欸廖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-start">
                <label for="rawMaterial">原材料</label>
                <div>
                  <input type="text" id="rawMaterial" class="border-2 rounded-l-md" size="8">
                  <button type="button" class="border-2 border-red-400 rounded-r-sm bg-red-400 text-white hover:bg-red-600 hover:border-red-600 px-1">加入</button>
                  <div class="flex">
                    <div class="text-xs mt-1 mr-3">
                      <div class="flex items-center">
                        <button type="button" class="rounded-full bg-red-400 hover:bg-red-600 mr-1 relative" style="width: 13px; height: 13px;">
                          <span class="absolute -top-1/4 right-1/4 text-white">x</span>
                        </button>
                        <span>讚讚欸廖</span>
                      </div>
                    </div>
                    <div class="text-xs mt-1">
                      <div class="flex items-center">
                        <button type="button" class="rounded-full bg-red-400 hover:bg-red-600 mr-1 relative" style="width: 13px; height: 13px;">
                          <span class="absolute -top-1/4 right-1/4 text-white">x</span>
                        </button>
                        <span>讚讚欸廖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="bg-red-400 hover:bg-red-600 text-white rounded-md px-3 py-1 mt-5">送出</button>
        </form>
      </div>
    </div>
    <div class="w-8/12 bg-white rounded-md mx-5 p-5">
      <div>
        <h2 class="text-3xl font-bold mb-2">產品列表</h2>
        <ul>
          <li class="rounded-md border mb-2">
            <a href="#" class="p-3 flex items-center justify-between font-bold">
              <div class=" flex items-center">
                <img src="../assets/image/items/1_fa5fe15e-75d8-45e0-8156-29ea083372e9.webp" alt="" style="width: 80px">
                <p class="ml-3">オートミールクッキー『FruOats（フルオーツ）』プレーン 30枚入り</p>
              </div>
                <p>¥2760 <span class="text-xs">税込</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('fruoats='))
      ?.split('=')[1]

    axios.defaults.headers.common.authorization = token
    const url = 'https://cors-product.herokuapp.com/https://sheltered-oasis-69489.herokuapp.com'
    axios.post(`${url}/api/check`)
      .then(res => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
