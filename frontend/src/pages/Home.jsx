import React from 'react'
import Header from '../components/Header'
import SpecialityMenue from '../components/SpecialityMenue'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'


function Home() {
  return (
    <div>
     <Header/>
     <SpecialityMenue/>
     <TopDoctors/>
     <Banner/>
     
    </div>
  )
}

export default Home