import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Weather = () => {

const [incaming, setIncaming] = useState([]);

const fetchData= async()=>{
 const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=f1185293238812d64fdeb40705065877`)

//  for more days
//  const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=athens&appid=f1185293238812d64fdeb40705065877&cnt=16`)


// console.log(res.data);

// console.log(res.data.id);
// console.log(res.data.name);
// console.log(res.data.weather[0].description);
// console.log(res.data.weather[0].icon);
// console.log(res.data.main.temp);
// console.log(res.data.main.humidity);

let mydata = {

    id:res.data.id,
    name:res.data.name,
    description:res.data.weather[0].description,
    icon:res.data.weather[0].icon,
    temp:res.data.main.temp,
    humidity:res.data.main.humidity

}





setIncaming([mydata])



}

console.log(incaming);



useEffect(()=>{

fetchData();

},[])




    return (
        <div className="weather-main">
              <img className='back' src="https://i.pinimg.com/originals/e1/3a/4d/e13a4d737425141353603f7a3edb73cd.jpg" alt=""/>

        <div className="wheater-data">
          
          {incaming.map(item=>(
                <div className="single-wheather" key={item.id}>
                <div className="city same-single">
          <p>{item.name}</p>
                </div>

        <div className="text-icon same-single">
    <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt=""/><span>{item.temp.toFixed(0)} C °</span>
        </div>

                <div className="situation same-single">
          <p>{item.description}</p>
                </div>

                <div className="moisture same-single">
          <p>{item.humidity} %</p>
                </div>
            </div>
          ))}
        </div>


        </div>
    )
}

export default Weather


//  api.openweathermap.org/data/2.5/weather?q=London&appid=f1185293238812d64fdeb40705065877

// f1185293238812d64fdeb40705065877


// in windows:alt + 0176
// mac:option +00b0