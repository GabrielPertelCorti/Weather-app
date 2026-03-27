import Card from './components/Card'
import { useState } from 'react'
import './App.css'

export type WeatherData = {
  name: string,
  main: {
    temp: number,
    humidity: number,
  }
  weather: {
    description: string,
    icon: string,
  }[]
}

function App() {
  
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const API_KEY = import.meta.env.VITE_API_KEY

  async function getWeatherData(){
    if(!city) return

    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`)

      const data = await response.json()

      if(Number(data.cod) !== 200) return

      setWeatherData(data)

    } catch(err){
      console.error('Erro ao buscar dados do tempo', err)
    }
  }

  return (
    <div>
      <Card city={city} setCity={setCity} weatherData={weatherData} getWeatherData={getWeatherData} />
    </div>
  )
}

export default App
