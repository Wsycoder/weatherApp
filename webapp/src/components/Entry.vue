<!--
 * @Author: your name
 * @Date: 2021-04-17 12:21:18
 * @LastEditTime: 2021-04-18 16:27:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weatherapp/webapp/src/components/Entry.vue
-->
<template>
  <div class="entry">
    <div class="startApp"
        @click="entryClick()"
    >{{ msg }}</div>
  
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data () {
    return {
      msg: 'Start App'
    }
  },
  methods:{
    entryClick(){
      this.$router.push('/city');
    }
  }
  
}
</script>
<style   scoped>
 html {
  font-size: 10px;
}
 
.startApp{
    text-align: center;
    font-size: 5rem;
    width: 100%;
    color: white;
    background-color:#EE7600;
    border: 2px solid black;
}

.entry {
    margin-top: 20%;
    width: 22%;
    text-align: center;
    height: 40%;
    margin-left: 39%;
}
</style>
