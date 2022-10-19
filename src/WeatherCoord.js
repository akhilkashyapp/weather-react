import React, { useState, useEffect } from 'react'
import axios from 'axios';

const WeatherCoord = () => {

const [incaming, setIncaming] = useState([]);
const [word, setWord] = useState('');

const [text, setText] = useState('');



const coordBring = ()=>{

const success = (position)=>{

// fetching data function
const fetchData= async(lat, lon)=>{
    try {
        
    //    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=f1185293238812d64fdeb40705065877`)

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f1185293238812d64fdeb40705065877`)
   
   
       let mydata = {
           id:res.data.id,
           name:res.data.name,
           description:res.data.weather[0].description,
           icon:res.data.weather[0].icon,
           temp:res.data.main.temp,
           humidity:res.data.main.humidity
       }
       
       setIncaming([mydata])
   
   
   
   
    } catch (error) {
        console.log(error);
    }
   
   }

   fetchData(position.coords.latitude,position.coords.longitude);

}


const error=()=>{
    console.log('not posible to get data');
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success,error)
}else{
    console.log("location cannot be supported from browser");
}


}





useEffect(()=>{

// fetchData();



if(text===''){
    coordBring();
}else{

   filterText(); 
}

},[text])


const handleChange = (e)=>{
  setWord(e.target.value);
  console.log(word);
}

const clickPlace = async(e)=>{

e.preventDefault();

try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${word}&units=metric&appid=f1185293238812d64fdeb40705065877`)


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
} catch (error) {
  console.log(error);  
}
}


const handleText = (e)=>{
    setText(e.target.value)
}


const results = incaming.map((item)=>{
        
    if(item.icon==='01n'){
        return   <img key={item.id} className="back" src="https://thumbor.thedailymeal.com/E1su6jFghGSGh4GSFiPDYEfDf_c=/870x565/https://www.theactivetimes.com/sites/default/files/slideshows/109049/113637/03_Clear_moon.jpg" alt=""/>

    } else if(item.icon==='01d'){
        return   <img className="back" key={item.id} src="https://i.pinimg.com/originals/e1/3a/4d/e13a4d737425141353603f7a3edb73cd.jpg" alt=""/>
    }

    else if(item.icon==='10n'){
        return   <img className="back" key={item.id} src="https://media.istockphoto.com/photos/rain-night-picture-id831057314?k=6&m=831057314&s=170667a&w=0&h=Mh8Sp8wfkIjTjcIySplGhksuDBSVxLvLlWrsN0eZ8lY=" alt=""/>
    }
    else if(item.icon==='04n'){
        return   <img className="back" key={item.id} src="https://live.staticflickr.com/5758/22448249491_e3e9ddcddf_b.jpg" alt=""/>
    }
    else if(item.icon==='02d'){
        return   <img className="back" key={item.id} src="https://www.saobserver.net/wp-content/uploads/2019/08/18312467_web1_Mainly-sunny.jpg" alt=""/>
    }
    else if(item.icon==='04d'){
        return   <img className="back" key={item.id} src="https://townsquare.media/site/385/files/2016/08/cloudy-day-3-1376042788goo.jpg?w=980&q=75" alt=""/>
    }
    else if(item.icon==='50d'){
        return   <img className="back" key={item.id} src="https://pcdn.columbian.com/wp-content/uploads/2020/09/Foggy-weather-1226x0-c-default.jpg" alt=""/>
    }
    else if(item.icon==='10d'){
        return   <img className="back" key={item.id} src="https://www.ekathimerini.com/resources/2019-07/rain-thumb-large1-thumb-large.jpg" alt=""/>
    }
    else if(item.icon==='03d'){
        return   <img className="back" key={item.id} src="https://www.publicdomainpictures.net/pictures/110000/velka/scattered-clouds.jpg" alt=""/>
    }
    else if(item.icon==='50n'){
        return   <img className="back" key={item.id} src="https://images.glaciermedia.ca/polopoly_fs/1.23130032.1521742589!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/air-quality.jpg" alt=""/>
    }


    
   
   
})


const filterText = async ()=>{
    try {
        
           const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=f1185293238812d64fdeb40705065877`)
    
       
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
       
       
        } catch (error) {
            console.log(error);
        }
}

    return (
        <div className="weather-main">
        {/* <img className='back' src="https://i.pinimg.com/originals/e1/3a/4d/e13a4d737425141353603f7a3edb73cd.jpg" alt=""/> */}

        {results}

        <div className="wheater-data">

            <div className="input">
                <label htmlFor="">Search</label>


              <form  onSubmit={clickPlace} >

              <div className="input-btn">
                
                <input type="text"
                placeholder="Input city..."
               value={word}
                onChange={handleChange}
                
                />

            <button disabled={word===''?true:false} type={"submit"} >Submit</button>

              </div>
              <div className="select">
             <select value={text} onChange={handleText} >
             <option value="">Cities</option>
                <option value="athens">Athens</option>
                <option value="paris">Paris</option>
                <option value="london">London</option>
                <option value="berlin">Berlin</option>
                <option value="los angeles">Los angeles</option>
                <option value="melbourne">Melbourne</option>
                <option value="mumbai">Mumbai</option>
                <option value="oslo">Oslo</option>
                <option value="amsterdam">Amsterdam</option>


                  </select>
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

export default WeatherCoord


//  api.openweathermap.org/data/2.5/weather?q=London&appid=f1185293238812d64fdeb40705065877

// f1185293238812d64fdeb40705065877


// in windows:alt + 0176
// mac:option +00b0