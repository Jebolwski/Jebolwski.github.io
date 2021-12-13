<template>
  <div class="entrance">
    <h3 class="image col-12 text-center text-white mt-3"></h3>
    <div class="card card-dark col-8 offset-2 h-50 mt-5">
      <div class="card-header text-center ">
        <h5 class="card-text text-success">Get in to Fly</h5>
      </div>
      <div class="card-body mt-4">
        <select class="col-4 offset-4" v-model="usernames">
          <option class="option" v-for="data in data" :key="data.id" >{{data.id}}</option>
        </select>
        <br>
        <br>
        <hr>
        <br>
        <router-link :to="'/users/'+usernames"><button class="btn btn-success text-center col-4 offset-4">Let's Fly as {{usernames}}</button></router-link>
      </div>
    </div>
    <router-view />
  </div>
    
  
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css'
    export default {
        name: "App",
        data() {
            return {
                data: {},
                usernames: "",
            }
        },
        mounted() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => {
                    return res.json()
                })
                .then((data) => this.data = data)

        },
       
    }
</script>
<style>
    .entrance {
        position: absolute;
        width: 100vw;
        height: 100%;
        background-color: rgb(97, 194, 141);
    }

    .loader{
        position: absolute;
        z-index: 1;
        width: 100vw;
        height: 100%;
        background-color:rgb(97, 194, 141);
        display: grid;
        place-items: center;
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

   
    
   
    .spinner{
      z-index: 1;
      width: 80px;
      height: 80px;
      border: 5px greenyellow solid;
      border-top:6px white solid;
      border-radius: 50%;
      animation: spin 2s infinite linear;
    }

    .image{
      background-image:url("./smoke1.png");
      background-size: cover;
      width: 70px;
      height: 70px;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 0;
        background-color: rgb(97, 194, 141);
    }
    
     ::-webkit-scrollbar-thumb {
         background-color: rgb(70, 167, 113);
         border-radius: 10px;
     }

     @keyframes spin {
       0%{
         transform: rotateZ(0deg);
       }
       50%{
         transform: rotateZ(180deg);
       }
       100%{
         transform: rotateZ(360deg);
       }
       
     }

     @media only screen  and (max-width:830px){
          .news{
            display: none;
          }

          .posts{
            margin-left: 10px;
          }
       
     }
</style>