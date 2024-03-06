import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./dashboard.scss"
import MainPage from '../MainPage/MainPage'
const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
      <div className='sidebar'>
    <Sidebar/>
      </div>
      <div className='mainPage'>
    <MainPage/>
    </div>
    </div>
    </>
  )
}

export default Dashboard