import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddEngineer from '../components/EngineerPageComponets/ButtonAddEngineer';
import NavBar from '../components/GeneralComponents/NavBar';
import SideBar from '../components/GeneralComponents/SideBar';
import ClientsCompleteList from '../components/ClientesPageComponents/ClientsCompleteList';
import BackButton from '../components/GeneralComponents/BackButton';

function ClientsPage() {
    return (
        <div>
        <NavBar />
        <SideBar/>
        <div className="p-1 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Clientes</h1>
            </div>
                <ClientsCompleteList />
            <div className="grid gap-4 mb-4 grid-cols-2 md:grid-cols-4">
                <BackButton destinations={""}/>
                <ButtonAddEngineer destination={'/HomePage/Clients/Add'} type={"Clientes"} />
            </div>
        </div>
        </div>
        </div>
      )
}

export default ClientsPage