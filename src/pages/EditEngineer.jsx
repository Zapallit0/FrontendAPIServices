import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import FormEditEngineer from '../components/EngineerPageComponets/FormsEditEngineer';
import ButtonEngineerData from '../components/EngineerPageComponets/ButtonEngineerData';
import NavBar from '../components/GeneralComponents/NavBar';
import SideBar from '../components/GeneralComponents/SideBar';
function EditEngineer() {
  return (
    <div>
    <NavBar />
    
    <SideBar />

    <div className="p-4 sm:ml-64">
       <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Editor de ingenieros</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4 j">
                <FormEditEngineer />
                {/*Botones para descargar*/}
                {/* <ButtonEngineerData /> */}
            </div>
       </div>
    </div>
    </div>
  )
}

export default EditEngineer