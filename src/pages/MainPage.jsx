import React from 'react'
import EngineersList from '../components/HomePageComponents/EngineersList'
import CardCountServices from '../components/HomePageComponents/CardCountServices'
import SliderImgs from '../components/HomePageComponents/SliderImgs'
import ServicesList from '../components/HomePageComponents/ServicesList'
import ClientsList from '../components/HomePageComponents/ClientsList'
import Solutions from '../components/HomePageComponents/Solutions'
import NewsCard  from '../components/HomePageComponents/NewsCard'
import { Link } from 'react-router-dom'
import NavBar from '../components/GeneralComponents/NavBar'
import SideBar from '../components/GeneralComponents/SideBar'

function MainPage() {
  return (
    <div>
    <NavBar />
    <SideBar />


    <div className="p-1 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
            <EngineersList />
            <CardCountServices />
            <NewsCard />
        </div>
        <ServicesList />
        <ClientsList /> 
        <Solutions />
        {/* <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
                </p>
            </div>
        </div> */}
    </div>
    </div>
    </div>
  )
}

export default MainPage