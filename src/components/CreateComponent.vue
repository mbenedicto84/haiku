<template>
  <div class="createhaiku">
    <h1>Create A Post</h1>

    <form @submit.prevent="addPost">
      <div class="row">

          <div class="form-group">

            <input placeholder="Haiku Title" type="text" class="form-control" v-model="post.title">
          </div>

        </div>
        <div class="row">

            <div class="form-group">

              <textarea placeholder="Haiku Content" class="form-control" v-model="post.body" rows="5"></textarea>
            </div>

        </div><br />
        <div class="row">

            <div class="form-group">

              <input placeholder="User" type="text" class="form-control" v-model="post.user">
            </div>

          </div><br/>
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>

</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
      let uri = 'http://localhost:4000/posts/add';
      this.axios.post(uri, this.post).then(() => {
         this.$router.push({name: 'posts'});
      });
  }
    }
  }


</script>
