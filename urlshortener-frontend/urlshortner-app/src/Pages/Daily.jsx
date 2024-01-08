import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../App.css'

import NavScrollExample from '../Components/NavBar'
import { Model } from '../Components/Model'
import CustomizedTables from '../Components/Table'
import { GetTodayUrl } from '../Services/apiService'

function Daily() {
  const [allUrl,setAllurl]=useState([]);


  useEffect(()=>{
  
  const fetchdata=async()=>{
    const token=localStorage.getItem('token');
     try {
      const response = await  GetTodayUrl(token);
      console.log(response);
      setAllurl([...response.data.todayUrlList])
    
      
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

export default Daily