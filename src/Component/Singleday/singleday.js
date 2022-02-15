import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import "./singleday.css" 
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import moment from "moment"
export default function Single() {
   const [data, setdata] = useState([]);
   useEffect(() => {
     axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Kozhikode&appid=1969ca3e82aba2bdb88b7ae9f8c7740d").then((response)=>{
// console.log(response.data.list[1].main.temp);
// console.log(response.data.list[1].weather[0].description);
// console.log(response.data.list[1].dt_txt);
const filterData=response.data.list.filter((reading)=>(
    reading.dt_txt.includes("21:00:00")
))
console.log(filterData);
setdata(filterData)
     })
   }, []);
   
    const mapoutput=   data.map((details,i)=>{
        return(
      
            <div className="container" >
               
    <div className="row" id='fle'>
        <div className="col" key={i}>
            <h3>{moment(details.dt_txt).format("dddd")}</h3>
            <h4>{moment(details.dt_txt).format("HH:MM:SS")}</h4>
            <CloudQueueIcon id="icon"/>
            <h4>{Math.floor(details.main.temp- 273.15)}<sup>0</sup></h4>
            <p>{details.weather[0].description}</p>
        </div>
    </div>
            </div>
         
        )
       })
   return(

       <>
       <div id="dd">{mapoutput}</div></>
   )
}