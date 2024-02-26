import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from '../spinner'
function Solutions() {
    const[solutions,setSolutions]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(() =>{
        setLoading(true);
        axios.get("http://localhost:5555/solutions")
        .then((response)=>{
            setSolutions(response.data.solutions);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])

    return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Servicios en Proceso
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Fecha de Creación
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Ingeniero Acargo
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Cliente
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Servicio Prestado
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">+Info</span>
                    </th>
                </tr>
            </thead>
            <tbody>
            {loading ? (
                    <Spinner /> 
                ) : (
                    solutions.map((solutions,index) => {
                        const date = new Date(solutions.createdTime);
                        const formattedDate = date.toLocaleDateString();
                        return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {formattedDate}
                                </th>
                                <td class="px-6 py-4">
                                    {solutions.engineer.nombre}
                                </td>
                                <td class="px-6 py-4">
                                    {solutions.client.nombre}
                                </td>
                                <td class="px-6 py-4">
                                    {solutions.service.nombre}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mas Info</a>
                                </td>
                            </tr>
                        );
                        })
                )};
            </tbody>
        </table>
    </div>
    );
}


export default Solutions