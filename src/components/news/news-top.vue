<template>
  <div class="home-top">
    <div class="top-bar">
      <div class="log">
        <img src="../../assets/img/back.png" @click="back">
      </div>
      <div class="top-title">
        <span>新闻详情</span>
      </div>
      <div class="serch">
        <img :src="imgUrl" @click="mark">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgUrl:require("../../assets/img/mark.png")
    };
  },
  methods:{
    mark(){
      if(this.imgUrl == require("../../assets/img/mark.png") ){
        this.imgUrl = require("../../assets/img/markup.png")
      }else{
         this.imgUrl = require("../../assets/img/mark.png")
      }
    },
   back(){
     this.$router.go(-1);
   }
  }
}
</script>



<style>
.home-top{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b70002;
  padding: 5px;
}

.top-bar img {
  width: 25px;
}
.top-title {
  color: #ffcd43;
  font-size: 24px;
  font-weight: bold;
}

</style>