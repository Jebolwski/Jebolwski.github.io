    });
<template>
    <!-- *TODO made news tab to the left,left of the news tab is text and the right part is the photo -->
    <div class="mainpage">
        <div class="news col-2 offset-10">
            <h3 class="text-center text-white mt-2">News</h3>
            <ul class="list-unstyled d-sticky">
                <li v-for="news in news" :key="news" class="text-white text-center">
                    <ul class="new mt-3 d-flex h6 rounded list-unstyled">
                        <li class="new-left float-left">{{news.title}}</li>
                        <li class="new-right float-left d-flex align-items-center mr-2"><img :src="news.urlToImage" width="100" class="rounded"></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="bottom" class="col-12 position-fixed border">
        <ul class="d-flex list-unstyled justify-content-evenly align-items-center w-100 text-white">
            <li>Home</li>
            <router-link :to="'/users/'+data.id+'/posts'" class="text-white text-decoration-none"><li>Posts</li></router-link>
            <li>Repositories</li>
             <router-link :to="'/users/'+data.id+'/profile'" class="text-white text-decoration-none"><li>Profile</li></router-link>
            <li>{{data.username}}</li>
             <router-link to="/" class="text-white text-decoration-none"><li>Logout</li></router-link>
        </ul></div>
    </div>
</template>

<script>
    /**
     *TODO putting articels in object 'articles' as json file
     */
    var apiKey = "fa8d3b0866b240c1ad2bae9fead16f56";
    import 'bootstrap/dist/css/bootstrap.css'
    export default {
        data() {
            return {
                data: {},
                user: this.$route.params.id,
                news: {},
            }
        },
        mounted() {
            fetch("https://jsonplaceholder.typicode.com/users/" + this.user)
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
    
    .mainpage {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
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
        width: 310px;
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

     ::-webkit-scrollbar {
        position: absolute;
        width: 0px;
    }
    
     ::-webkit-scrollbar-thumb {
        position: absolute;
        margin-left: 10px;
        width: 0px;
    }

    
</style>