<template>
  <div>
    <div class="dfList">
      <div class="dlfList-title">
        <p>专题：{{dlfTitle}}</p>
      </div>
   <div class="dlf-over" :style="{width: windowsWidth+ 'px'}">
 <div class="dlf-width" :style="{width: alldlfWidth+ 'px'}">
    
        <div class="dlfList-content" v-for="(item, index) in dlfList" :key="index" @click="gotoArticle(item.id)" >
          <div class="dlfImg">
            <img :src="item.picture">
          </div>
          <div class="dlfTitle">
            <p>{{item.title}}</p>
          </div>
          <div class="dlfDetail">
            <p>{{item.source}}</p>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return{
            alldlfWidth : 0,
            windowsWidth : 0,
        }
    },
  props: {
    dlfList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dlfTitle: {
      type: String,
      default: () => {
        return "";
      }
    },
  },
  mounted() {
    let dlfWidth = document.querySelector(".dlfList-content").offsetWidth;
    this.alldlfWidth = this.dlfList.length * dlfWidth;
    let ww = window.screen.width;
    this.windowsWidth = ww;
  },
     methods: {
    gotoArticle(id) {
      this.$router.push({
        path: "/news/" + id
      });
    }
  }
};
</script>   



  <style>
.dlfList-title p {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 10px;
}
.dlf-over{
     overflow-x: scroll;
}
.dlf-over::-webkit-scrollbar {
  display: none;
}
.dlf-width{
    display: flex;
    flex-flow: row nowrap;
  
}

.dlfList-content {
  border: 2px solid #ddd;
  box-sizing: border-box;
  width: 164px;
 display: flex;
 flex-flow: column nowrap;
 justify-content: space-between;


 }
.dlfTitle p {
  color: #444;
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 5px;
}
.dlfDetail p {
  color: #999;
  font-size: 12px;
    margin-bottom: 4px;
}
.dlfImg img {
  width: 150px;
  height: 110px;
  display: block;
  margin: 5px;
}
</style>