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
         <div>
            <ul class="posts col-sm-12 col-md-6  offset-4 text-white">
                <h3 class="text-center overflow-hidden mt-2">Posts</h3>
                <li v-for="data in data" :key="data" class="ind-post mt-4 rounded">
                    <h5 class="post-title text-center">{{data.title}}</h5>
                    <p class="text-center">{{data.body}}</p>
                </li>
            </ul>
        </div>
        <div id="bottom" class="col-12 position-fixed border">
        <ul class="d-flex list-unstyled justify-content-evenly align-items-center w-100">
            <router-link :to="'/users/'+this.user" class="text-decoration-none"><li>Home</li></router-link>
            <li>Posts</li>
            <li>Repositories</li>
            <router-link :to="'/users/'+this.user+'/profile'" class="text-decoration-none"><li>Profile</li></router-link>
            <li>{{userprof.username}}</li>
                         <router-link to="/" class="text-decoration-none"><li>Logout</li></router-link>

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
        }
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

    #bottom li{
        transition: .4s;
        color: white;
        border-radius: 40%;
    }
    #bottom li:hover{
        transition: .4s;
        font-size:1.45rem ;
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
    
     ::-webkit-scrollbar {
        width: 0;
    }

    @media only screen  and (max-width:985px){
          .news{
            display: none;
          }

          .posts{
            margin-left: 10px;
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