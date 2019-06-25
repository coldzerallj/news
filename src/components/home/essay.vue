<template>
  <div>
    <div class="all-newsList">
      <div class="newsList" v-for="(item, index) in dataList" :key="index">
        <dlf-list
          v-if="item.dlfList && item.dlfList != 0"
          :dlfList="item.dlfList"
          :dlfTitle="item.dlfTitle"
        ></dlf-list>
        <template v-else>
          <div class="content" @click="gotoArticle(item.id)">
            <div class="captionTop">
              <p>{{item.title}}</p>
            </div>
            <div class="captionDown">
              <p class="captionDetail">{{item.source}}</p>
              <p class="captionDetail">{{item.freshTime}}</p>
            </div>
          </div>
          <div class="content-img" @click="gotoArticle(item.id)">
            <img :src="item.collectPic">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import dlfList from "../home/dlf-lIST";

export default {
  data() {
    return {};
  },
  components: {
    dlfList
  },

  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  created: function() {},

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
.newsList {
  margin: 10px auto;
  padding: 5px;
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-left: 10px;
}
.captionTop p {
  font-size: 18px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.captionDetail {
  font-size: 5px;
  margin-top: 5px;
}
.captionDetail img {
  width: 20px;
  vertical-align: bottom;
  margin: 0 5px;
}

.content-img img {
  width: 150px;
  margin-right: 10px;
}
</style>
