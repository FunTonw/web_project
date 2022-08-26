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
      state.productsdata = data
    },
    addCart (state, data) {
      const cartsData = state.carts.data
      const isCarts = cartsData.findIndex(x => x.product.id === data.id)
      if (isCarts === -1) {
        const pushCart = {
          product: { ...data },
          qty: 1
        }
        cartsData.push(pushCart)
      } else {
        cartsData[isCarts].qty += 1
      }
      console.log(cartsData)
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
