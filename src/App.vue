<template>
  <div id="app">
    <div class="row"> 
      <div class="col heightofAll"> 
        <single-bar/>
      </div>
      <div class="col heightofAll">
          <multi-bar/>
      </div>
    </div>
        <div class="row"> 
      <div class="col heightofAll"> 
        <single-bar/>
      </div>
      <div class="col heightofAll">
          <multi-bar/>
      </div>
    </div>
  
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SingleBar from './components/Bar/SingleBar.vue';
import MultiBar from './components/Bar/MultiBar.vue';

export default {
  name: 'App',
  components: {
    SingleBar,
    MultiBar

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.heightofAll{
  height: 36vh;
}
</style>
