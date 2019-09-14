
<template>
  <div>

<div class="inspiration">
  <input v-model="title" placeholder="Find Anime">
  <div v-if="show">
    <button @click="rerender">Find Anime</button>
      <button @click="resetForm">Reset</button>
 </div>
  <h1 class="title">{{info.length <= null ? null: info.data[0].attributes.titles.en}}</h1>
  <img :src="getPic()" class="art" />
  <p>{{info.length <= null ? null: info.data[0].attributes.synopsis}}</p>
  <p>Format: {{info.length <= null ? null: info.data[0].attributes.showType}}</p>
  <p>Start Date: {{info.length <= null ? null: info.data[0].attributes.startDate}}</p>
    <p>End Date: {{info.length <= null ? null: info.data[0].attributes.endDate}}</p>
    <p>Age Rating: {{info.length <= null ? null: info.data[0].attributes.ageRating}}</p>
      <p>Rating Guide: {{info.length <= null ? null: info.data[0].attributes.ageRatingGuide}}</p>
      <p>Viewer Rating: {{info.length <= null ? null: info.data[0].attributes.averageRating}}</p>
  </div>
  </div>

</template>

<script>


import axios from 'axios'
export default {
  data () {
    return {
      info:[],
      data:[],
      title:[],
      message:[],
      loading: true,
      show:true

    }
  },
  methods:{
            rerender(){axios
              .get('https://kitsu.io/api/edge/anime?filter[text]='+ this.title)
              .then(response => {
                console.log(response);
                this.info = response.data
                this.loading = true
                console.log(this.info.data[0].attributes.coverImage.large)
                console.log(this.info)
              })
              .catch(error => {
                console.log(error)
              })
            },
            getPic(){
               return this.info.length <= null ? null: this.info.data[0].attributes.coverImage.large
             },
             resetForm() {

           this.title = ""
       }
          },



        }

</script>
