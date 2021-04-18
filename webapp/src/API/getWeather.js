/*
 * @Author: your name
 * @Date: 2021-04-18 15:36:39
 * @LastEditTime: 2021-04-18 16:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weatherapp/webapp/src/API/getWeather.js
 */
import sunny from "../assets/sunny.png"
import snow from "../assets/snow.png"
import rain from "../assets/rain.png"
import cloudy from "../assets/cloudy.png"
export default function getWeather(that) {
  var url= `https://devapi.qweather.com/v7/weather/now?location=${that.citycode[that.num]}&key=a200d5e99db34b6691569ae0f63a6f8e`;
  var request = new XMLHttpRequest();
  request.open('GET',url,false);
  request.send()
  var res1 = JSON.parse(request.response)

  var url= `https://devapi.qweather.com/v7/weather/3d?location=${that.citycode[that.num]}&key=a200d5e99db34b6691569ae0f63a6f8e`;
  var request = new XMLHttpRequest();
  request.open('GET',url,false);
  request.send()
  var res2 = JSON.parse(request.response)

  var temp = document.getElementById('temp')   //获取实时温度
  temp.innerHTML = res1.now.temp + "°"
  var max = document.getElementById('max')     //最高温度
  max.innerHTML = res2.daily[0].tempMax + "°"
  var min = document.getElementById('min')     //最低温度
  min.innerHTML = res2.daily[0].tempMin + "°"   
  var weather = document.getElementById('weather')    //天气情况 阴/晴...
  weather.innerHTML = res1.now.text 

  if(res1.now.text == "晴"){
    that.weather = sunny
  }else if(res1.now.text == "阴"){
    that.weather = cloudy
  }else if(res1.now.text == "雨"){
    that.weather = rain
  }else if(res1.now.text == "雪"){
    that.weather = snow
  }  
}
export {getWeather}