<template>
  <div id="app">
    <div id="nav">vue2</div>
    <div>
      <p>九宫格-1</p>
      <div class="box1">
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
      </div>
    </div>
    <div>
      <p>九宫格-2</p>
      <div class="box2">
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
      </div>
    </div>
    <div>
      <p>九宫格-3</p>
      <table class="box3">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div>
      <p>九宫格-4</p>
      <div class="box4">
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
      </div>
    </div>
    <div>
      <img src="/ecode.png" alt>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .box1 {
    width: 300px;
    background: hsl(153, 47%, 49%);
    overflow: hidden;
    .blank {
      height: 100px;
      width: 100px;
      box-sizing: border-box;
      border: 2px solid #2c3e50;
      float: left;
    }
  }
  .box2 {
    width: 300px;
    background: #42b983;
    display: flex;
    flex-wrap: wrap;
    .blank {
      height: 100px;
      width: 100px;
      box-sizing: border-box;
      border: 2px solid #2c3e50;
      margin-left: -2px;
      margin-top: -2px;
    }
    .blank:hover{
      z-index:1;
      border-color: red;
    }
  }
  .box3 {
    width: 300px;
    background: #43b883;
    display: flex;
    flex-wrap: wrap;
    td {
      height: 100px;
      width: 100px;
      box-sizing: border-box;
      border: 2px solid #2c3e50;
      display: inline-block;
    }
  }
  .box4 {
    width: 300px;
    background: #42b983;
    display: grid;
    flex-wrap: wrap;
    td {
      height: 100px;
      width: 100px;
      box-sizing: border-box;
      border: 2px solid #2c3e50;
      display: inline-block;
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
