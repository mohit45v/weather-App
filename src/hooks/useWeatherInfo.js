import React, { useState, useEffect } from 'react'

function useWeatherInfo(lat,lon,trigger) {

    const api_key = "63a87dbd392a5e2b24964814b56b2f1d";
    const [data, setData] = useState();

   
   
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then((response)=>response.json())
        .then((response)=>setData(response))

    },[trigger])
    return data
  
}


export default useWeatherInfo