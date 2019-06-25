<template>
  <div class="home-top">
    <div class="top-bar">
      <div class="top-title">
        <mu-avatar style="font-size: 30px">K</mu-avatar>
        <span>看新闻</span>
      </div>
      <div class="serch">
        <img src="../../assets/img/serch.png" alt>
      </div>
    </div>
  </div>
</template>

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
  justify-content: flex-end;
  align-items: center;
  background-color: #b70002;
  padding: 5px;
}

.top-bar img {
  width: 25px;
}
.top-title {
  margin: 0 auto;
  color: #ffcd43;
  font-size: 24px;
  font-weight: bold;
}
.top-title .mu-avatar {
  color: #b70002;
  background-color: #ffcd43;
  font-family: Impact;
  vertical-align: bottom;
  margin-right: 5px;
  -ms-transform: rotate(-20deg); /* IE 9 */
  -moz-transform: rotate(-20deg); /* Firefox */
  -webkit-transform: rotate(-20deg); /* Safari and Chrome */
  -o-transform: rotate(-20deg); /* Opera */
  transform: rotate(-20deg);
}
</style>
