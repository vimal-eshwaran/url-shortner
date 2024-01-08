import React, { useEffect } from 'react'
import { getRedirect } from '../Services/apiService';
import { useNavigate, useParams } from 'react-router-dom';

function Redirect() {
const {shortUrl}=useParams();
const navigate=useNavigate();
useEffect(()=>{
const fetchdata=async()=>{
    try {
        console.log(shortUrl)
        const response = await getRedirect(shortUrl);
        console.log(response);
        if(response.status){

          window.location.href = response.data.longUrl;


        }
       
       } catch (error) {
        console.log(error)
        
       }}
fetchdata();

},[])


  return (
    <div>
    {alert("Redirecting another page")}
      <h1>Redirecting to Another Page</h1>
    </div>
  )
}

export default Redirect