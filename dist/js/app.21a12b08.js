(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[t._v("Add Anime Show")])],1),a("h1",{staticClass:"tracking-in-expand",staticStyle:{color:"#CC5500",padding:"20px","font-size":"50px"}},[t._v("Ichiraku")]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/posts"}},[t._v("Anime")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/inspiration"}},[t._v("Search Anime")])],1)])]),a("br"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1),a("footer",[t._v("\n    Made By Marcos Benedicto\n  ")])],1)},o=[],i={},r=i,l=(a("6d7d"),a("2877")),c=Object(l["a"])(r,n,o,!1,null,"3a6cca9c",null),u=c.exports,p=(a("ab8b"),a("8c4f")),d=a("a7fe"),m=a.n(d),v=a("bc3a"),f=a.n(v),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container fade-in"},[a("div",{staticClass:"hometext"},[a("p",[t._v("Ichiraku is a App that allows anime lovers to gather and search for new anime. We can collect and list anime's we have watched and recommend them to other users. It is a great source for finding any type of anime with an extensive guide from start dates to ratings. Please enjoy!")]),a("div",[a("img",{staticClass:"slider",attrs:{src:t.images[Math.abs(t.currentNumber)%t.images.length]},on:{mouseover:t.stopRotation,mouseout:t.startRotation}}),a("p",[a("a",{on:{click:t.prev}},[a("span",{staticClass:"prev"},[t._v("Previous")])]),t._v(" || "),a("a",{on:{click:t.next}},[a("span",{staticClass:"next"},[t._v("Next")])])])])])])},g=[],b={data:function(){return{images:["https://i.pinimg.com/originals/1a/8c/b4/1a8cb40846975a48063f51ac171be156.jpg","https://wallpapercave.com/wp/wp3153710.jpg","https://www.wallpaperflare.com/static/513/552/1019/shonen-jump-anime-wallpaper.jpg"],currentNumber:0,timer:null}},mounted:function(){this.startRotation()},methods:{startRotation:function(){this.timer=setInterval(this.next,3e3)},stopRotation:function(){clearTimeout(this.timer),this.timer=null},next:function(){this.currentNumber+=1},prev:function(){this.currentNumber-=1}}},_=b,C=Object(l["a"])(_,h,g,!1,null,null,null),w=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createhaiku fade-in"},[a("h1",[t._v("Add A Anime")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{placeholder:"Anime Title",type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{placeholder:"Comments",rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.user,expression:"post.user"}],staticClass:"form-control",attrs:{placeholder:"User",type:"text"},domProps:{value:t.post.user},on:{input:function(e){e.target.composing||t.$set(t.post,"user",e.target.value)}}})])]),a("br"),t._m(0)])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[t._v("Add Show")])])}],P={data:function(){return{post:{}}},methods:{addPost:function(){var t=this,e="http://localhost:4000/posts/add";this.axios.post(e,this.post).then((function(){t.$router.push({name:"posts"})}))}}},k=P,j=Object(l["a"])(k,y,x,!1,null,null,null),$=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"center fade-in"},[a("h1",[t._v("Anime List")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"create"}}},[t._v("Create Post")])],1),a("div",{staticClass:"poems fade-in"},t._l(t.posts,(function(e){return a("div",{key:e._id,staticClass:"grid"},[a("h1",[t._v(" Title: "),a("br"),t._v(t._s(e.title))]),a("p",[t._v(" Comment: "),a("br"),t._v(t._s(e.body))]),a("h3",[t._v(" by: "),a("br"),t._v(" "+t._s(e.user))]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.deletePost(e._id)}}},[t._v("Delete")])],1)})),0)])},A=[],N={data:function(){return{posts:[]}},created:function(){var t=this,e="http://localhost:4000/posts";this.axios.get(e).then((function(e){t.posts=e.data}))},methods:{deletePost:function(t){var e=this,a="http://localhost:4000/posts/delete/".concat(t);this.axios.delete(a).then((function(a){e.posts.splice(e.posts.indexOf(t),1)}))}}},E=N,R=Object(l["a"])(E,O,A,!1,null,null,null),S=R.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit fade-in"},[a("h1",[t._v("Edit Post")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Anime Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Comments")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("User")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.user,expression:"post.user"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.user},on:{input:function(e){e.target.composing||t.$set(t.post,"user",e.target.value)}}})])])]),t._m(0)])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary"},[t._v("Update")])])}],T={data:function(){return{post:[]}},created:function(){var t=this,e="http://localhost:4000/posts/edit/".concat(this.$route.params.id);this.axios.get(e).then((function(e){t.post=e.data}))},methods:{updatePost:function(){var t=this,e="http://localhost:4000/posts/update/".concat(this.$route.params.id);this.axios.post(e,this.post).then((function(){t.$router.push({name:"posts"})}))}}},M=T,F=Object(l["a"])(M,D,I,!1,null,null,null),U=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"inspiration fade-in"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Find Anime"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t.show?a("div",[a("button",{on:{click:t.rerender}},[t._v("Find Anime")])]):t._e(),a("h1",{staticClass:"title"},[t._v(t._s(t.info.length<=null?null:t.info.data[0].attributes.titles.en))]),a("img",{staticClass:"art",attrs:{src:t.getPic()}}),a("div",{staticClass:"video"},[a("iframe",{staticStyle:{margin:"20px"},attrs:{type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/"+this.video+"?autoplay=0&origin=http://example.com",frameborder:"0"}})]),a("p",[t._v(t._s(t.info.length<=null?null:t.info.data[0].attributes.synopsis))]),a("p",[t._v("Format: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.showType))]),a("p",[t._v("Start Date: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.startDate))]),a("p",[t._v("End Date: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.endDate))]),a("p",[t._v("Age Rating: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.ageRating))]),a("p",[t._v("Rating Guide: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.ageRatingGuide))]),a("p",[t._v("Viewer Rating: "+t._s(t.info.length<=null?null:t.info.data[0].attributes.averageRating))])])])},B=[],G={data:function(){return{info:[],data:[],title:[],video:[],message:[],loading:!0,show:!0}},methods:{rerender:function(){var t=this;f.a.get("https://kitsu.io/api/edge/anime?filter[text]="+this.title).then((function(e){console.log(e),t.info=e.data,t.loading=!0,t.title="",console.log(t.info.data[0].attributes.coverImage.large),console.log(t.info.data[0].attributes.youtubeVideoId),t.video=t.info.data[0].attributes.youtubeVideoId})).catch((function(t){console.log(t)}))},getPic:function(){return this.info.length<=null?null:this.info.data[0].attributes.coverImage.large}}},J=G,z=Object(l["a"])(J,V,B,!1,null,null,null),H=z.exports;a("927c"),s["a"].use(p["a"]),s["a"].use(m.a,f.a),s["a"].config.productionTip=!1;var L=[{name:"home",path:"/",component:w},{name:"create",path:"/create",component:$},{name:"posts",path:"/posts",component:S},{name:"edit",path:"/edit/:id",component:U},{name:"inspiration",path:"/inspiration",component:H}],W=new p["a"]({mode:"history",routes:L});new s["a"](s["a"].util.extend({router:W},u)).$mount("#app")},"6d7d":function(t,e,a){"use strict";var s=a("f9d0"),n=a.n(s);n.a},"927c":function(t,e,a){},f9d0:function(t,e,a){}});
//# sourceMappingURL=app.21a12b08.js.map