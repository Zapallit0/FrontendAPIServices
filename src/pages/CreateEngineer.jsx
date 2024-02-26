import React from 'react'
import FormNewEngineer from '../components/FormsNewEngineer';
import ButtonEngineerData from '../components/EngineerPageComponets/ButtonEngineerData';
import NavBar from '../components/GeneralComponents/NavBar';
import SideBar from '../components/GeneralComponents/SideBar';

function NewEngineer() {
  return (
    <div>
    <NavBar/>
    <SideBar />

    <div className="p-4 sm:ml-64">
       <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="grid grid-cols-1 gap-4 mb-4 j">
               
                <FormNewEngineer />                
                {/*Botones para descargar*/}

            </div>
       </div>
    </div>
    </div>
  )
}

export default NewEngineer