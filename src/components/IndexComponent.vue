<template>
  <div class="list-bg">
<div >
  <div class="center fade-in">
    <h1>Anime List</h1>
    <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
  </div>
  <div class="poems fade-in">

          <div v-for="post in posts" :key="post._id" class="grid">
            <h1> Title: <br/>{{ post.title }}</h1>
            <p> Comment: <br/>{{ post.body }}</p>
                <p> Date: <br/>{{ post.date  }}</p>
            <p> Recommend: <br/>{{ post.recommend }}</p>
            <h3> by: <br/> {{ post.user}}</h3>
            <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
            <button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button>
          </div>

  </div>
</div>
</div>

</template>

<script>
import moment from 'moment'

  export default {
      data() {
        return {
          posts: [],
          myDate: null
        }
      },
      created() {
      let uri = 'https://ichiraku.herokuapp.com/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `https://ichiraku.herokuapp.com/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      },

},
filters: {
  moment: function () {
return moment().format('YYYY-MM-DD');

}
}

}
</script>
