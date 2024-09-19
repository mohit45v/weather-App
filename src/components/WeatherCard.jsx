import React from 'react'
import { useState } from 'react'
import useWeatherInfo from '../hooks/useWeatherInfo'

function WeatherCard() {

    const [lat, setLat] = useState(18.991120)
    const [lon, setLon] = useState(72.837053)
    const [trigger, setTrigger] = useState(0)
    // const lat= 19.212221
    // const lon = 73.097832
    const data = useWeatherInfo(lat,lon,trigger)
    // const setLatLon = (lat,lon)=>{
    //     setLat(lat)
    //     setLon(lon)
    // }
    return (
        <div class="m-10">
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Weather Details</h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Latitude: {data?.coord.lat}  Longitude: {data?.coord.lon}</p>
            </div>

            <div>
                <label  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div class="relative mt-2 rounded-md shadow-sm flex">

                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"    onChange={(e)=>{setLat(e.target.value)}}/>
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={(e)=>{setLon(e.target.value)}}/>
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setTrigger(trigger+1)}}>
                        Check
                    </button> 


                </div>
            </div>

            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">City</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.name}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">{data?.weather[0].main}</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.weather[0].description}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Temperature</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{Math.floor(data?.main.temp - 273.15) + "°C"}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Humidity</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.main.humidity}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Air Pressure</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.main.pressure}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Wind Speed</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data?.wind.speed}</dd>
                    </div>

                </dl>
            </div>
        </div>
    )
}

export default WeatherCard