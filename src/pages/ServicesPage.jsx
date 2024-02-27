import React from 'react'
import NavBar from '../components/GeneralComponents/NavBar'
import SideBar from '../components/GeneralComponents/SideBar'
import BackButton from '../components/GeneralComponents/BackButton'
import ServicesList from '../components/HomePageComponents/ServicesList'
import ButtonAddEngineer from '../components/EngineerPageComponets/ButtonAddEngineer'
function ServicesPage() {
  return (
    <div>
        <NavBar />
        <SideBar />
        <div className="p-1 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Servicios</h1>
    </div>
        <ServicesList />
        <div className="grid grid-cols-4 gap-4 mb-4">
          <BackButton destinations={""}/>
          <ButtonAddEngineer destination={"/HomePage/Services/Add"} type={"Servicio"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ServicesPage