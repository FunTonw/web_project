<template>
  <div>
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
