import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherBox(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Jaipur",
        humidity:84,
        temp:28.64,
        tempMax:28.64,
        tempMin:28.64,
        weather:"mist",
      })
      let update=(newInfo)=>{
        setWeatherInfo(newInfo);
      }
    return (
        <>
        <SearchBox update={update}/>
        <InfoBox info={weatherInfo}/>
        </>
      )
}