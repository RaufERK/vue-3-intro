app.component('review-form', {
  props: {},
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave Review</h3>
    <label for="name:">Name:</label>
    <input id="name" v-model="name">

    <label for="review:">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    <label for="raiting:">Raiting:</label>
    <select id="raiting" v-model.number="raiting">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>
    <input class="button" type="submit" value="Submit">
    </form>`,
  data() {
    return {
      name: '',
      review: '',
      raiting: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.raiting === null) {
        alert('Rview is incomlite!!')
        return
      }
      const productReview = {
        name: this.name,
        review: this.review,
        raiting: this.raiting,
      }
      this.$emit('review-submitted', productReview)
    },
  },
  computed: {},
})
