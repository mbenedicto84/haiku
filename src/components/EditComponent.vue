
<template>
  <div class="editbg">
    <div class="edit fade-in">
      <h1>Edit Post</h1>
      <form @submit.prevent="updatePost">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Anime Title</label>
              <input type="text" class="form-control" v-model="post.title">
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Comments</label>
                <textarea class="form-control" v-model="post.body" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Date</label>
                <input type="date" name="date" class="form-control" v-model="post.date">
              </div>
            </div>
            </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Recommend</label>
                <input type="text" class="form-control" v-model="post.recommend">
              </div>
            </div>
            </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>User</label>
                <input type="text" class="form-control" v-model="post.user">
              </div>
            </div>
            </div>
          <div class="form-group">
            <button class="btn btn-primary">Update</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post: []
        }
      },
      created() {
        let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `https://ichiraku.herokuapp.com/posts/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>
