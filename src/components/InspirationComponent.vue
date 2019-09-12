
<template>
  <div>

<div class="inspiration">

  <h1>{{data.length <= null ? null: data[0].title}}</h1>
  <p>{{data.length <= null ? null: data[0].content}}</p>
  <p>{{data.length <= null ? null: data[0].poet.name}}</p>
  <div v-if="show">
    <button @click="rerender">New Poem</button>
 </div>
  </div>
  </div>

</template>

<script>


import axios from 'axios'
export default {
  data () {
    return {
      data:[],
      loading: true,
      show:true


    }
  },
  methods:{
            rerender(){
            window.location.reload()
                    }
        },
  mounted () {
  axios
    .get('https://cors-anywhere.herokuapp.com/https://www.poemist.com/api/v1/randompoems')
    .then(response => {
      this.data = response.data
      this.loading = true
    })
    .catch(error => {
      console.log(error)
    })
  }
}

</script>
