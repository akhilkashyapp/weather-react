import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Weather1 = () => {

const [incaming, setIncaming] = useState([]);
const [word, setWord] = useState('');


// fetching data function
const fetchData= async()=>{
 const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=f1185293238812d64fdeb40705065877`)


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


useEffect(()=>{

fetchData();

},[])


const handleChange = (e)=>{
  setWord(e.target.value);
  console.log(word);
}

const clickPlace = async(e)=>{

e.preventDefault();

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=f1185293238812d64fdeb40705065877`)


    let mydata = {
        id:res.data.id,
        name:res.data.name,
        description:res.data.weather[0].description,
        icon:res.data.weather[0].icon,
        temp:res.data.main.temp,
        humidity:res.data.main.humidity
    }
    
    setIncaming([mydata])
    setWord('')
}




    return (
        <div className="weather-main">
              <img className='back' src="https://i.pinimg.com/originals/e1/3a/4d/e13a4d737425141353603f7a3edb73cd.jpg" alt=""/>

        <div className="wheater-data">

            <div className="input">
                <label htmlFor="">Search</label>


              <form onSubmit={clickPlace} >

              <div className="input-btn">
                
            


                <input type="text"
                placeholder="Input city..."
               value={word}
                onChange={handleChange}
                
                />

            <button type={"submit"}>Submit</button>



              </div>
              </form>

        
            </div>
          
          {incaming.map(item=>(
                <div className="single-wheather" key={item.id}>
                <div className="city same-single">
          <p>{item.name}</p>
                </div>

        <div className="text-icon same-single">
    <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt=""/><span>{item.temp.toFixed(0)} C °</span>
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

export default Weather1


//  api.openweathermap.org/data/2.5/weather?q=London&appid=f1185293238812d64fdeb40705065877

// f1185293238812d64fdeb40705065877


// in windows:alt + 0176
// mac:option +00b0