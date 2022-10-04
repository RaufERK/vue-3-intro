app.component('review-list', {
  props: { reviewArr: { type: Array, required: true } },
  template:
    /*html*/
    `<div class="review-container">
       <h3>Reviews:</h2>
        <ul >
          <li v-for="(review,index) in reviewArr" :key="index">
          {{review.name}} gave thi {{review.raiting}} stars {{}}
          <br/>
          "{{review.review}}"
          </li>
        </ul>
      </div>`,
})
