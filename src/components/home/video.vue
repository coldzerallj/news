<template>
    <div>
        <div class="video-list" v-for="(item,index) in dataList" :key="index" @click="gotoArticle(item.id)">
            <div class="video-title">{{item.title}}</div>
            <div class="video-play">
                <video controls :poster="item.picture">
                    <source  :src="item.video">
                </video>
                </div>
            <div class="video-source">{{item.source}} {{item.freshTime}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
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
    gotoArticle(id) {
      this.$router.push({
        path: "/news/" + "newsContent"+"/"+id
      });
    }
  }
};
</script>

<style>
.video-list{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 10px;
    background-color: #fff;
}
.video-title{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
}

.video-play video{
    width: 100%;
    border: #888 solid 1px;

}
.video-source{
    font-size: 16px;
    padding-top: 10px;
    color: #888;
    padding-bottom: 10px;
    line-height: 21px;
}
    
</style>
