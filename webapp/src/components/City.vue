<!--
 * @Author: your name
 * @Date: 2021-04-17 13:22:14
 * @LastEditTime: 2021-04-18 16:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weatherapp/webapp/src/components/City.vue
-->


<template>
 <div class="citys">
  <div class="background">
    <img src="../assets/background.jpg" width="100%" height="100%" alt="" >
  </div>
  <div class="citys">
    <div class="cityItem" v-if="num == '0'"> 
      <div class="cityName"><h1>{{cities[num]}}</h1></div>
      <div id="temp" class="temp"></div>
      <div id="min" class="min"></div>
      <div id="max" class="max"></div>
      <div id="weather"></div>
      <div class="left" @click="nextCity(1)"><img src="../assets/leftArrow.png" alt=""></div>
      <div class="refresh" id="icon"><img :src=this.weather alt=""></div>
      <div class="right" @click="nextCity(2)"><img src="../assets/rightArrow.png" alt=""></div>
    </div>
    <div class="cityItem" v-if="num == '1'"> 
      <div class="cityName"><h1>{{cities[num]}}</h1></div>
      <div id="temp"></div>
      <div id="min"></div>
      <div id="max"></div>
      <div id="weather"></div>
      <div class="left" @click="nextCity(1)"><img src="../assets/leftArrow.png" alt=""></div>
      <div class="refresh" id="icon"><img :src=this.weather alt=""></div>
      <div class="right" @click="nextCity(2)"><img src="../assets/rightArrow.png" alt=""></div>
    </div>
    <div class="cityItem" v-if="num == '2'"> 
      <div class="cityName"><h1>{{cities[num]}}</h1></div>
      <div id="temp"></div>
      <div id="min"></div>
      <div id="max"></div>
      <div id="weather"></div>
      <div class="left" @click="nextCity(1)"><img src="../assets/leftArrow.png" alt=""></div>
      <div class="refresh" id="icon"><img :src=this.weather alt=""></div>
      <div class="right" @click="nextCity(2)"><img src="../assets/rightArrow.png" alt=""></div>
    </div>
  </div>
 </div>
</template>
  
<script>
import sunny from "../assets/sunny.png"
import snow from "../assets/snow.png"
import rain from "../assets/rain.png"
import cloudy from "../assets/cloudy.png"
import refresh from "../assets/refresh.png"
import getWeather from "../API/getWeather"

export default {
  name: 'City',
  data () {
    return {
      num : 0,
      cities : ["北京","杭州","上海"],
      citycode: [101010300,101210106,101020500],
      weather: refresh
    }
  },
  mounted:function(){
    let that = this
    getWeather(that);
  }
    
  ,
  methods:{

    nextCity(key){
      let that = this;
      if(key == 1){
        if(that.num == 0){
          that.num = 2;
        }else{
          that.num --;
        }
      }else{
        if(that.num == 2){
          that.num = 0;
        }
      else{
          that.num++;
        }
      }
      getWeather(that);
    },
    
   
  }
  
}
</script>
<style scoped>
  .background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}

#temp {
  position: absolute;
    top: 68%;
    width: 10%;
    left: 45%;
    text-align: center;
    height: 5%;
    font-size: 4rem;
    color: white;
    font-weight: 800;
}

#min {
    position: absolute;
    top: 80%;
    width: 10%;
    left: 30%;
    text-align: center;
    height: 5%;
    font-size: 3.5rem;
    color: white;
    font-weight: 400;

}
#max {
    position: absolute;
    top: 80%;
    width: 10%;
    left: 60%;
    text-align: center;
    height: 5%;
    font-size: 3.5rem;
    color: white;
    font-weight: 400;

}
#weather{
  position: absolute;
    top: 90%;
    width: 10%;
    left: 45%;
    text-align: center;
    height: 5%;
    font-size: 4rem;
    color: white;
    font-weight: 800;
}
.cityItem {
    display: flex;
}
.cityName{
    height: 20%;
    width: 30%;
    font-size: 3rem;
    text-align: center;
    left: 35%;
    position: relative;
    top: 4rem;
    color: white;
}
.left {
    position: absolute;
    top: 45%;
    left: 9%;
}
.refresh {
    height: 20%;
    width: 30%;
    font-size: 3rem;
    text-align: center;
    left: 35%;
    position: absolute;
    top: 35%;
}
.right{
    position: absolute;
    top: 45%;
    left: 80%;
}
</style>
