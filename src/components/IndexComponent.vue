<template>
  <div>

        <div class="poems">
      <h1>Posts</h1>
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>

        </div>

        <div class="poems">


                <div v-for="post in posts" :key="post._id">
                  <div>Title: {{ post.title }}</div>
                  <div>Content: {{ post.body }}</div>
                  <div>User: {{ post.user }}</div>
                  <router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link>
                  <button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button>
                </div>

        </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/posts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
  }
</script>
