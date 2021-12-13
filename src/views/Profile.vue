<template>
    <!-- *TODO made news tab to the left,left of the news tab is text and the right part is the photo. -->
    <div class="entrance">
        <div class="news">
            <h3 class="text-center text-white overflow-hidden mt-2">News</h3>
            <ul class="list-unstyled">  
                <li v-for="news in news" :key="news" class="text-white text-center">
                    <ul class="new mt-3 d-flex h6 rounded list-unstyled">
                        <li class="new-left">{{news.title}}</li>
                        <li class="new-right d-flex align-items-center mr-2"><img :src="news.urlToImage" height="69" width="90" class="rounded"></li>
                    </ul>
                </li>
            </ul>
        </div>
         <div class="posts col-md-12 col-lg-6 h-100 text-white">
                <div class="top text-center mt-2 p-3 mb-2 overflow-hidden">
                    <router-link :to="'/users/'+this.user"><div class="logo"></div></router-link>
                    <div class="h4 text-center offset-5">{{userprof.name}}</div>
                </div>
                <div class="backgroundimage"><img class="bp" src="https://picsum.photos/200/300?random=1"></div>
                <div class="profileimage"><img class="pp" src="https://picsum.photos/200"/></div>
                <div class="informaiton w-100 p-3">
                   <h5 class="text-white p-1">{{userprof.name}}</h5>
                   <h6 class="p-1" style="color: rgb(235, 235, 235);">@{{userprof.username}}</h6>
                   <p class="p-1" style="color: lightgray;">i like watching fights</p>
                   <button class="btn btn-success p-1 btn-md btn-sm">Edit Profile</button>
                   <ul class="list-unstyled d-flex justify-content-evenly mt-3">
                       <li>Fly's</li>
                       <li>|</li>
                       <li>Media</li>
                       <li>|</li>
                       <li>Responds</li>
                       <li>|</li>
                       <li>Likes</li>
                   </ul>
                </div>
                <li v-for="data in data" :key="data" class="ind-post mt-4 rounded">
                    <h5 class="post-title text-center">{{data.title}}</h5>
                    <p class="text-center">{{data.body}}</p>
                </li>
        </div>
        <div id="bottom" class="col-12 position-fixed border-top">
        <ul class="d-flex list-unstyled justify-content-evenly align-items-center w-100 text-white">
            <router-link :to="'/users/'+this.user" class="text-white text-decoration-none"><li>Home</li></router-link>
            <router-link :to="'/users/'+this.user+'/posts'" class="text-white text-decoration-none"><li>Posts</li></router-link>
            <li>Repositories</li>
            <router-link :to="'/users/'+this.user+'/profile'" class="text-white text-decoration-none"><li>Profile</li></router-link>
            <li>{{userprof.username}}</li>
            <router-link to="/" class="text-white text-decoration-none"><li>Logout</li></router-link>

        </ul></div>
    </div>
</template>

<script>
    /**
     *TODO putting articels in object 'articles' as json file.
     */
    var apiKey = "fa8d3b0866b240c1ad2bae9fead16f56";
    import 'bootstrap/dist/css/bootstrap.css'
    export default {

        data() {
            return {
                data: {},
                user: this.$route.params.id,
                news: {},
                userprof: {},
            }
        },
        /**
         *? Fetching news, posts and username.
         * */
        mounted() {
            fetch("https://jsonplaceholder.typicode.com/users/" + this.user + "/posts")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.data = data;
                }),

                fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
                .then((res) => {
                    return res.json();
                })
                .then((news) => {
                    this.news = news.articles;
                }),

                fetch("https://jsonplaceholder.typicode.com/users/" + this.user)
                .then((res) => {
                    return res.json()
                })
                .then((userprof) => {
                    this.userprof = userprof
                })
        },
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .entrance {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 300%;
        background-color: rgb(97, 194, 141);
    }
    
    #bottom {
        background-color: rgb(87, 183, 130);
        border-radius: 5px;
        height: 7vh;
        width: 100vw;
        line-height: 7vh;
        bottom: 0;
        font-size: 20px;
        transition: .4s;
    }
    
    #bottom:hover {
        height: 8vh;
        line-height: 7vh;
        transition: .4s;
    }
    
    .news {
        position: fixed;
        height: 100vh;
        padding-left: 10px;
        overflow-x: scroll;
    }
    
    .new {
        width: 300px;
        height: 80px;
        background-color: rgb(87, 183, 130);
    }
    
    .new-left {
        width: 210px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        line-height: 70px;
    }
    
    .new-right img {
        margin-right: 8px;
    }
    
    .posts {
        margin-left: 350px;
        top: 0;
        list-style: none;
    }
    
    .ind-post {
        background-color: rgb(87, 183, 130);
    }
    
    .post-title {
        color: rgb(222, 235, 187);
    }
    
    .backgroundimage {
        height: 150px;
        background-size: cover;
    }
    
    .profileimage {
        background-size: cover;
        width: 100px;
        border: 1px solid lightgray;
        border-radius: 50%;
        height: 100px;
        margin-left: 50px;
        margin-top: -50px;
    }
    
    .btn {
        float: right;
        margin-top: -6em;
    }

    .logo{
      background-image: url("../smoke1.png");
      width: 50px;
      height: 50px;
      background-size: cover;
      margin-bottom: 20px;
      position:absolute;
      margin-bottom: 20px;
      top: 15px;
    }

    .pp{
        border-radius:50%;
        width: 100px;
        background-size: cover;
    }

    .bp{
        height: 150px;
        background-size: cover;
        width: 100%;
    }
    
     ::-webkit-scrollbar {
        width: 0;
    }

    @media only screen  and (max-width:985px){
          .news{
            display: none;
          }

          .posts{
            margin-left: 0;
          }
          
          #bottom{
              font-size: 15px;
          }
         
       
     }

     @media only screen and (max-width:400px) {
         .logo{
              width: 35px;
              height: 35px;
              top: 20px;
          }

          .profileimage{
              width: 70px;
              height: 70px;
          }

          #bottom{
              font-size: 13px;
          }

         
     }
</style>