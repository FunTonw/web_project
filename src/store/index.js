import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    productsdata: [],
    carts: {
      data: [],
      total: 0,
      final_total: 0
    }
  },
  getters: {
  },
  mutations: {
    createData (state, data) {
      // console.log(state.productsdata.isArray())
      state.productsdata = data
    },
    addCart (state, data) {
      state.carts.data.push(data)
    }
  },
  actions: {
    checkCreateData ({ commit }) {
      const url = 'https://cors-product.herokuapp.com/https://sheltered-oasis-69489.herokuapp.com'
      axios.get(`${url}/api/products`)
        .then((res) => {
          commit('createData', res.data.data)
        })
    }
  },
  modules: {
  }
  // strict: process.env.NODE_ENV !== 'production'
})
