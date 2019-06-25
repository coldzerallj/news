<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index" class="pic" @click="gotoArticle(item.id,'newsPicture')">
      <img v-lazy="item.picture">
      <span class="pic-title">{{item.title}}</span>  
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    gotoArticle(id,type) {
      this.$router.push({
        path: "/news/" + type+"/"+id
      });
    }
  }
};
</script>

<style>
.pic{
    padding: 10px;
    margin: 10px;
    text-align: center;
    background-color: #fff;
}
.pic img{
    width: 100%;
}
.pic-title{
    font-size: 18px; 
}
</style>