
<template>
  <div class="editbg">

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
          let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>
