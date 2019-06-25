<template>

 <div>
    <home-header></home-header>

     <tabs :oneList="channelList" @getCname="getCname"></tabs>
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <Pic :dataList="articleList" v-if="cname == 'tp'"></Pic>
      <Video :dataList="articleList" v-else-if="cname == 'sp'"></Video>
      <essay :dataList="articleList" v-else></essay>    
    </mu-load-more>

  </div>
</template>

<script>
import HomeHeader from "@/components/home/home-header.vue";
import Essay from "@/components/home/essay.vue";
import Tabs from "@/components/home/tabs.vue";
import fetch from "../fetch";
import Video from '../components/home/video';
import Pic from '../components/home/pic';

export default {
  components: {
    HomeHeader,
    Essay,
    Tabs,
    Video,
    Pic,
  },

  data() {
    return {
      refreshing: false,
      loading: false,
      articleList: [],
      pageIndex: 1,
      channelList: [],
      cname: "home"
    };
  },
  created() {
    // 创建完成
     this.getChanneList();
    this.goFrist();
   

  },
  methods: {
    //获取新闻分类栏的请求
    getChanneList() {
      fetch.get("/api/chinanews/channelList?dtp=2&isWap=yes").then(res => {
        const oneList = res.data.data;
        this.channelList = oneList;
      });
    },
    //设置默认首页请求
    goFrist() {
      fetch
        .get(
          "/api/chinanews/getDigest?language=chs&dtp=10&isWap=yes&pageIndex="
        )
        .then(res => {
          const datalist = res.data.data;
          this.articleList = this.articleList.concat(datalist);
        });
    },
    //获取新闻列表请求
    getList() {
      fetch
        .get(
          "/api/chinanews/getNewsList?language=chs&pageSize=15&searchType=1&dtp=6&isWap=yes&cname=" +
            this.cname +
            "&pageIndex=" +
            this.pageIndex
        )
        .then(res => {
          const datalist = res.data.data;
          this.articleList = this.articleList.concat(datalist);
          this.loading = false;
          this.refreshing = false;
        });
    },

    loadRefresh(cname) {
      switch (cname) {
        case "home":
          fetch
            .get(
              "/api/chinanews/getDigest?language=chs&dtp=10&isWap=yes&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
              this.loading = false;
              this.refreshing = false;
            });

          break;
        case "zb":
          fetch
            .get(
              "/api/chinanews/getLiveList?language=chs&dtp=2&isWap=yes&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
              this.loading = false;
              this.refreshing = false;
            });
          break;
        case "sp":
          fetch
            .get(
              "/api/chinanews/getVidList?language=chs&isWap=yes&pageSize=15&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
              this.loading = false;
              this.refreshing = false;
            });
          break; 
          case "tp":
          fetch
            .get(
              "/api/chinanews/getPicList?language=chs&isWap=yes&pageSize=15&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
              this.loading = false;
              this.refreshing = false;
            });
          break;
        default:
          this.getList();
      }
    },

    getCname(cname) {
      switch (cname) {
        case "home":
          this.cname = cname;
          this.articleList = [];
          fetch
            .get(
              "/api/chinanews/getDigest?language=chs&dtp=10&isWap=yes&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
            });
          break;
        case "zb":
          this.cname = cname;
          this.articleList = [];
          fetch
            .get(
              "/api/chinanews/getLiveList?language=chs&dtp=2&isWap=yes&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
            });
          break;
        case "sp":
          this.cname = cname;
          this.articleList = [];
          fetch
            .get(
              "/api/chinanews/getVidList?language=chs&isWap=yes&pageSize=15&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
            });
          break;
          case "tp":
          this.cname = cname;
          this.articleList = [];
          fetch
            .get(
              "/api/chinanews/getPicList?language=chs&isWap=yes&pageSize=15&pageIndex=" +
                this.pageIndex
            )
            .then(res => {
              const datalist = res.data.data;
              this.articleList = this.articleList.concat(datalist);
            });
          break;
        default:
          this.cname = cname;
          this.pageIndex = 1;
          this.articleList = [];
          this.getList();
      }
    },
    refresh() {
      this.refreshing = true;
      this.pageIndex = 1;
      this.articleList = [];
      let cname = this.cname;
      this.loadRefresh(cname);
    },

    load() {
      this.loading = true;
      this.pageIndex++;
      let cname = this.cname;
      this.loadRefresh(cname);
    }
  }
};
</script>
 