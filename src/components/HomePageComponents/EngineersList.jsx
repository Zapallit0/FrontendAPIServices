import React, {useState, useEffect}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function EngineersList() {
    const [engineers,setEngineers]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:5555/engineers")
        .then((response)=>{
            setEngineers(response.data.engineers);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Engineers</h5>
                <Link to={'/HomePage/Engineers'} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Mirar Todo
                </Link>
            </div>
            <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {engineers.slice(0,5).map((engineer,index)=>(
                            <li key={index} className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/> */}
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {engineer.nombre}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {engineer.Profesion}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white max-md:hidden">
                                        {engineer.Grado}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
  )
}

export default EngineersList