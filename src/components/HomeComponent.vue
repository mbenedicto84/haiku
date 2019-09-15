

<template>
  <div class="container">
  <div class="hometext">
    Ichiraku is a App that allows anime lovers to gather and search for new anime. We can collect and list anime's we have watched and recommend them to other users. It is a great source for finding any type of anime with an extensive guide from start dates to ratings. Please enjoy!
    <div>
   <img
   :src="images[Math.abs(currentNumber) % images.length]"
   v-on:mouseover="stopRotation"
   v-on:mouseout="startRotation"
    class="slider"/>
   <p>
   <a @click="prev"><span class="prev">Previous</span></a> || <a @click="next" ><span class="next">Next</span></a>
   </p>
 </div>


  </div>
    </div>
</template>
<script>
export default {
  data() {
return{ images: ['https://i.pinimg.com/originals/1a/8c/b4/1a8cb40846975a48063f51ac171be156.jpg','https://wallpapercave.com/wp/wp3153710.jpg','https://www.wallpaperflare.com/static/513/552/1019/shonen-jump-anime-wallpaper.jpg'],
 currentNumber: 0,
 timer: null
}
},
mounted: function () {
this.startRotation();
},

methods: {
startRotation: function() {
this.timer = setInterval(this.next, 3000);
},

stopRotation: function() {
clearTimeout(this.timer);
this.timer = null;
},

next: function() {
this.currentNumber += 1
},
prev: function() {
this.currentNumber -= 1
}
}

}
</script>
