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
    cartsTotal (state) {
      return state.carts.data.reduce((x, y) => x + y.total, 0)
    },
    cartsCount (state) {
      return state.carts.data.reduce((x, y) => x + y.qty, 0)
    }
  },
  mutations: {
    createData (state, data) {
      state.productsdata = data
    },
    addCart ({ carts }, data) {
      const cartsData = carts.data
      const isCarts = cartsData.findIndex(x => x.product.id === data.id)
      if (isCarts === -1) {
        const pushCart = {
          product: { ...data },
          qty: 1,
          total: data.price
        }
        cartsData.push(pushCart)
      } else {
        cartsData[isCarts].qty += 1
        cartsData[isCarts].total += cartsData[isCarts].product.price
      }
      console.log(cartsData)
    },
    minusCart ({ carts }, data) {
      const cartsData = carts.data
      const isCarts = cartsData.findIndex(x => x.product.id === data.id)
      cartsData[isCarts].qty -= 1
      cartsData[isCarts].total -= cartsData[isCarts].product.price
    },
    delCart ({ carts }, id) {
      carts.data = carts.data.filter(x => x.product.id !== id)
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
