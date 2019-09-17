<template>
  <div >

<div class="inspiration fade-in">
  <input v-model="title" placeholder="Find Anime">
  <div v-if="show">
    <button @click="rerender">Find Anime</button>
 </div>

  <h1 class="title">{{info.length <= null ? null: info.data[0].attributes.titles.en}}</h1>
  <img :src="getPic()" class="art" />
  <div class="video video-responsive">

    <div class='embed-container'><iframe
      :src="'https://www.youtube.com/embed/'+this.video+'?autoplay=0&origin=http://example.com'"
    frameborder="0" style="margin:20px"></iframe></div>

  </div>

  <p>{{info.length <= null ? null: info.data[0].attributes.synopsis}}</p>
  <p>Format: {{info.length = null ? null: info.data[0].attributes.showType}}</p>
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
      video:[],
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
                this.title = ""
                console.log(this.info.data[0].attributes.coverImage.large)
                console.log(this.info.data[0].attributes.youtubeVideoId)
                this.video = this.info.data[0].attributes.youtubeVideoId
              })
              .catch(error => {
                console.log(error)
              })
            },
            getPic(){
               return this.info.length <= null ? null: this.info.data[0].attributes.coverImage.large
             },


          },



        }

</script>
