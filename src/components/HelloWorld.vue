<template>
  <div class="">
      <h3>
      <p>{{msg}}</p><br/>
  </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  }
}
</script>


<style scoped>

</style>
