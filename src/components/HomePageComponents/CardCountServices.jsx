import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CardCountServices() {
    const [services,setServices]=useState();  
    const[loading,setLoading]=useState(false);  
    const[engineers,setEngineers]=useState();
    const[clients,setClients]=useState();

    //Services
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:5555/services")
        .then((response)=>{
            setServices(response.data.count);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);

    //Engineers
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:5555/engineers")
        .then((response)=>{
            setEngineers(response.data.count);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);

    //Clients
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:5555/clients")
        .then((response)=>{
            setClients(response.data.count);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[]);


    return (
            <div className="block max-w-screen-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cantidad de servicios</h5>
                <p className="font-normal text-5xl text-gray-700 dark:text-gray-400 mb-5">{services}</p>
                <Link to={'/HomePage/Services'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Todos los servicios
                </Link>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10">Cantidad de Ingenieros</h5>
                <p className="font-normal text-5xl text-gray-700 dark:text-gray-400 mb-5">{engineers}</p>
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10">Cantidad de Clientes</h5>
                <p className="font-normal text-5xl text-gray-700 dark:text-gray-400 mb-5">{clients}</p>
            </div>
    )
}

export default CardCountServices