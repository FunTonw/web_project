<template>
  <div class="bg-gray-400">
  <div>
      <NavbarList />
  </div>
  <div class=" h-screen flex flex-col items-center justify-center">
    <div>
      <h1 class="text-start text-5xl font-bold text-sky-50 mb-5">LOGIN</h1>
      <form action="login" class=" bg-white flex flex-col p-20 max-w-screen-sm rounded-md" @submit.prevent="login">
        <div class="mb-5">
          <label for="username" class="mr-2 text-sm">帳號</label>
          <input type="text" id="username" class="border border-gray-400 rounded-sm" v-model="user.username">
        </div>
        <div class="mb-5">
          <label for="password" class="mr-2 text-sm">密碼</label>
          <input type="password" id="password" class="border border-gray-400 rounded-sm" v-model="user.password" >
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
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    NavbarList,
    FooterList
  },
  methods: {
    login () {
      const url = 'https://cors-product.herokuapp.com/https://sheltered-oasis-69489.herokuapp.com'
      axios.post(`${url}/api/login`, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data.usercookie
            document.cookie = `fruoats=${token}; expries=${new Date(expired)};`
            this.$router.push('/dashboardpage')
          }
        })
    }
  },
  created () {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('fruoats='))
      ?.split('=')[1]
    axios.defaults.headers.common.authorization = token
    const url = 'https://cors-product.herokuapp.com/https://sheltered-oasis-69489.herokuapp.com'
    axios.post(`${url}/api/check`)
      .then(res => {
        if (res.data.success) {
          this.$router.push('/dashboardpage')
        }
      })
  }
}
</script>
