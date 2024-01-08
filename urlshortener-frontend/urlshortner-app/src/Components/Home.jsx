import React, { useEffect, useState } from 'react'
import '../App.css'

import NavScrollExample from './NavBar'
import { Model } from './Model'
import { Col, Container, Row } from 'react-bootstrap'
import { getDashboard } from '../Services/apiService'

function Home() {
 const [dashboard,setDashBoard]=useState({today:0,monthly:0});

 useEffect(()=>{
   const datafetch=async()=>{
    try {
      const token=localStorage.getItem('token')
      const response=await getDashboard(token);
      
    if(response.status){
      setDashBoard({today:response.data.todayUrlList,monthly:response.data.thisMonthUrlList})
    }
    } catch (error) {
      console.log(error)
      
    }
   }
datafetch();
 },[dashboard])

  return (
  

<>

<NavScrollExample >
<div className='home container ' id='dashboard'>
    <div className='left-content '>
     <div className='container left-content-items'>
  
    <Model/>
     </div>
        
    </div>
    <div className='right-content'>
    <Container className='mt-5 border border-black h-75'>
    <Row><h2>Dashboard</h2></Row>
      <Row>
        <Col className='dashboard-count'><h3 >Daily Count</h3>
        <Col><h1>{dashboard.today}</h1></Col>
        
        </Col>
        <Col className='dashboard-count'><h3 >Monthly Count</h3>
        <Col><h1>{dashboard.monthly}</h1></Col>
        </Col>
      </Row>
      <Row>
      
        

      </Row>
</Container>
    </div>
</div>
</NavScrollExample>
</>
   
 
  )
}

export default Home