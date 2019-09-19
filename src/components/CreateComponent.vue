<template>
  <div class="createbg">
    <div class="createhaiku fade-in">
      <h1>Add A Anime</h1>

      <form @submit.prevent="addPost">
        <div class="row">

            <div class="form-group">

              <input placeholder="Anime Title" type="text" class="form-control" v-model="post.title">
            </div>

          </div>
          <div class="row">

              <div class="form-group">

                <textarea placeholder="Comments" class="form-control" v-model="post.body" rows="5"></textarea>
              </div>

          </div><br />
          <div class="row">

              <div class="form-group">

                <input type="date" name="date" class="form-control" v-model="post.date">
              </div>

            </div><br/>
          <div class="row">

              <div class="form-group">

                <input placeholder="Recommend" type="text" class="form-control" v-model="post.recommend">
              </div>

            </div><br/>
              <div class="row">

                  <div class="form-group">

                    <input placeholder="User" type="text" class="form-control" v-model="post.user">
                  </div>

                </div><br/>
          <div class="form-group">
            <button class="btn btn-primary">Add Show</button>
          </div>
      </form>
    </div>

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
      let uri = 'https://ichiraku.herokuapp.com/posts/add';
      this.axios.post(uri, this.post).then(() => {
         this.$router.push({name: 'posts'});
      }).then((responseJson) => {
  // Do something with the response
})
.catch((error) => {
  console.log(error);
  }
  


</script>
