import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react";
import * as Sentry from "@sentry/react";

import axios from "axios";
function App() {
 
const [data,setData]=useState({})
const [inputcity,setinputcity]=useState("")
const apiKey="ab590095f91c991d8db942b3bf2741db";
const getweatherdetails=(cityname)=>{
  if(!cityname) return;
  const apiurl="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apiKey;
axios.get(apiurl).then((res)=>{
  console.log(res.data)
  setData(res.data)
}).catch((err)=>{
  console.log("error",err)
})
}
const handleinput=(e)=>{
  setinputcity(e.target.value);
}
const handlesearch=()=>{
  getweatherdetails(inputcity)
}


  return (
    <div class="container">
<div class="card">
<img src="https://img.freepik.com/free-vector/rain-autumn-forest-wild-nature-landscape-fall_107791-13860.jpg?w=826&t=st=1675131410~exp=1675132010~hmac=d0afa0d5e21f34d607052fce20177b44a9b4321a4b4f8e61e331987d48c3024b"  class="img1" height="300px" alt="..."/>
  <div class="card-header text-center">
   <h1>weather App</h1>
  </div>
  <div class="card-body">
    <h5 class="card-title">Enter the location</h5>
    <div class="card-text">
<input class="form-control" type="text" value={inputcity} onChange={handleinput}></input>
<button class="btn btn-success text-center" onClick={handlesearch} >Search</button>
<button type="button" onClick={()=>{throw Error ("Ohh something went wrong by ashwanth");
alert("hello")}}>To check Error Sanitry</button>;

<div class="col-md-12 text-center mt-5">
  <div class="shadow rounded Weatherresult">

 <h6 class="weatherlocation">City Name:{data?.name}</h6>
 <h6 class="weathertemperature">Temperature:{((data.main?.temp)-273.16).toFixed(3)}°C</h6>
 <h6>Wind speed:{data.wind?.speed}kts</h6>
 <h6>Humidity:{data.main?.humidity}g.m<sup>-3</sup></h6>
 <h6>Pressure:{data.main?.pressure}Pa</h6>
 

 
  </div>
</div>


    </div>
  </div>
</div>

    </div>
  );
}

export default Sentry.withProfiler(App);