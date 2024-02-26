import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import AddEngineer from '../components/EngineerPageComponets/ButtonAddEngineer';
import EngineersCompleteList from '../components/EngineersCompleteList';
import StatusEngineers from '../components/EngineerPageComponets/StatusEngineers';
import Masters from '../components/EngineerPageComponets/Masters';
import TimeLineActivities from '../components/EngineerPageComponets/TimeLineActivities';
import ServicesDone from '../components/EngineerPageComponets/ServicesDone'
import NavBar from '../components/GeneralComponents/NavBar';
import SideBar from '../components/GeneralComponents/SideBar';
function EngineersPage() {
  return (
    <div>
    <NavBar />
    <SideBar />
    <div className="p-1 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Ingenieros</h1>
    </div>
        <EngineersCompleteList />
        <div className="grid grid-cols-4 gap-4 mb-4">
            <AddEngineer destination={'/HomePage/Engineers/Add'} type={"Ingenieros"} />
            <StatusEngineers />
            <Masters />
            <ServicesDone />
        </div>
        <TimeLineActivities />
    </div>
    </div>
    </div>
  )
}

export default EngineersPage