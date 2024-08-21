import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({update}){
    let[city,setCity]=useState("");
    let[err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="432d1fa2ab98ada6eb1a5729a13f64cb";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            // console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
        }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            update(newInfo);
        }
        catch(err){
            setErr(true);
        }
    }
    return(
        <div className='SearchBox'>
            <h3>Search Box</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                value={city} 
                onChange={handleChange}
                />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{color:"red"}}>No such Place</p>}
            </form>
        </div>
    )
}