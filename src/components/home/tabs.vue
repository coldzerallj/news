<template>
  <div>
    <div class="div-all-tab">
      <div class="div-tab">
        <ul class="tabs-ul" :style="{'width':ulWidth+'px'}">
          <li
            class="tabs-li"
            v-for="(item, index) in oneList"
            :key="index"
            @click="jump(item.cname)">
            <template v-if="item.name == '订阅'"> 
              IT
            </template>
            <template v-else-if="item.name == '直播'"> 
              图片
            </template>
            <template  v-else>
             {{item.name}}
            </template>
              
           
           
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import { isArray } from "util";
export default {
  props: {
    oneList: {
      type: Array,
      oneList: () => {
        return [];
      }
    }
  },
  data() {
    return {
      ulWidth: 0,
     
    };
  },
  methods: {
    jump(cname) {
      if(cname == 'dy'){
        this.$emit("getCname", 'it');
      }else if(cname == 'zb'){
        this.$emit("getCname", 'tp');
      }else{
        this.$emit("getCname", cname);
      }
    }
   
  },
  updated() {
    let liWidth = document.querySelector(".tabs-li").offsetWidth;
    this.ulWidth = this.oneList.length * liWidth;
  }
};
</script>


<style>

.div-all-tab {
  padding-top: 50px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  background: #d22520;
 

}
.div-tab {
  overflow-x: scroll;
}
.div-tab::-webkit-scrollbar {
  display: none;
}
.act{
  color: #d22520;
  background-color: #fff;
}
.tabs-li {
  float: left;
  width: 70px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}

.listMore {
  background-color: #fff;
}
.listMore img {
  width: 25px;
  height: 25px;
}
</style>

