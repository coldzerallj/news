<template>
  <div>
    <div class="all">
     
      <div class="top">
        <p>{{article.collectTtl}}</p>
      </div>
      <div class="message">
        <p class="left-message">{{article.source}} {{article.freshTime}}</p>
      </div>
      <hr>
       <div class="news-video" v-if="article.video && article.video !=0">
      <video controls :poster="article.picture" autoplay="autoplay"> 
          <source  :src="article.video">
        </video> 
      </div>
      <!-- <p v-if="article.collectPic"> 
        <img :src="article.collectPic" alt="">
      </p>
      -->
      <div class="main" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      article: '',
      type: 'newsContent'
   
    };
    
  },
  methods:{
    picChange(){
      console.log('1');
    }
  },

  created() {
       this.type = this.$route.params.type
    axios.get(
        "/api/chinanews/"+this.type+"?language=chs&dtp=2&isWap=yes&id=" +
          this.$route.params.id
      )
      .then(res => {
        this.article = res.data.data;
      });
      this.type = 'newsContent'
  },
};
</script>

<style>
.all {
  margin: 10px 10px;
  padding-top: 40px;
  background-color: #fff;
}
.news-video video{
  width: 100%;
}
.top{
  margin-top: 10px;
  text-align: center;
}
.top p {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
}
.left-message {
  font-size: 12px;
  color: #666;
  margin: 5px;
}
hr {
  margin: 5px;
}

.main {
  margin-top: 10px;
  font-size: 18px;
  padding: 18px;
}

#img-message {
  margin-bottom: 10px;
  text-align: center;
  text-indent: 0;
}
.main img {
  width: 100%;
}
</style>
