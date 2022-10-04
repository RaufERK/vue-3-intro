const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    }
  },
  methods: {
    updateCard(id) {
      this.cart.push(id)
    },
  },
})
