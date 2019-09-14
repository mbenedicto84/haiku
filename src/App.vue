<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Add Anime Show</router-link>
        </li>
        <h1 class="tracking-in-expand" style="color:#CC5500; padding:20px; font-size:50px;">Ichiraku</h1>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Anime</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/inspiration" class="nav-link">Search Anime</router-link>
        </li>

      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer>
      Made By Marcos Benedicto
    </footer>
  </div>
</template>

<style scoped src="@/assets/styles/main.css">
@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 2
    }
</style>

<script>

    export default{
    }
</script>
