import React from 'react'
import NavBar from '../../components/NavBar'
import EngineersList from '../../components/EngineersList'
import CardCountServices from '../../components/CardCountServices'
import SliderImgs from '../../components/SliderImgs'
import ServicesList from '../../components/ServicesList'
function HomePage() {
  return (
    <div>
        <NavBar Component1={EngineersList} Component2={CardCountServices} Component3={SliderImgs} LargeComponent1={ServicesList}/>
    </div>
  )
}

export default HomePage