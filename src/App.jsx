import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import useWeatherInfo from './hooks/useWeatherInfo'
import WeatherCard from './components/WeatherCard'


function App() {
  const data = useWeatherInfo()
  return (
    <>
     <WeatherCard/>
    </>
  )
}

export default App
