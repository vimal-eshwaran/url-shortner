import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../App.css'

import NavScrollExample from '../Components/NavBar'
import { Model } from '../Components/Model'
import CustomizedTables from '../Components/Table'
import {  GetMonthlyUrl } from '../Services/apiService'

function Monthly() {


  const [allUrl,setAllurl]=useState([]);


  useEffect(()=>{
  
  const fetchdata=async()=>{
    const token=localStorage.getItem('token');
     try {
      const response = await  GetMonthlyUrl(token);
      console.log(response);
      setAllurl([...response.data.thisMonthUrlList])
    
      
     } catch (error) {
      console.log(error)
      
     }
  
  }
  fetchdata();
  
  
  },[]);

  return (
  <>
  <NavScrollExample >
<div className='home container '>
    <div className='left-content '>
     <div className='container left-content-items'>
  
    <Model/>
     </div>
        
    </div>
    <div className='right-content'>
    <Container className='mt-5 border border-black h-100'>
    <Row><h2>Dashboard</h2></Row>
      <CustomizedTables rows={allUrl}/>
</Container>
    </div>
</div>
</NavScrollExample>




  </>
    
  )
}

export default  Monthly