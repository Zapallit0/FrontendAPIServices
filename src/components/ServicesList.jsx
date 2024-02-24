import React,{useEffect, useState} from 'react'
import Spinner from './spinner';
import axios from 'axios';

function Services() {
  const [services,setServices]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:5555/services")
    .then((response)=>{
        setServices(response.data.services);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    });
},[]);
  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Nombre
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Descripcion
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Rubro
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                          Etapas
                      </th>
                  </tr>
              </thead>
              <tbody>
                {loading? ( <Spinner/>):
                services.map((service,index)=>(
                  <tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          {service.nombre}
                      </th>
                      <td className="px-6 py-4 font-medium  bg-gray-50  dark:bg-gray-800">
                          {service.descripcion}
                      </td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {service.rubro}
                      </td>
                      <td className="px-6 py-4 font-medium   bg-gray-50  dark:bg-gray-800">
                          {service.etapas}
                      </td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}

export default Services