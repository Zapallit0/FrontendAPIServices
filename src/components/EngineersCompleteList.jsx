import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from './spinner';
import { Link} from 'react-router-dom';
function EngineersCompleteList() {
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Apellido
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DNI
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NColegioIng
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Profesion
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NServicios_Hechos
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Editar
                    </th>
                </tr>
            </thead>
            <tbody>
                {loading?(<Spinner />):engineers.map((engineer,index)=>(
                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {engineer.nombre}
                        </th>
                        <td className="px-6 py-4">
                            {engineer.apellido}
                        </td>
                        <td className="px-6 py-4">
                            {engineer.DNI}
                        </td>
                        <td className="px-6 py-4">
                            {engineer.NColegioIng}
                        </td>
                        <td className="px-6 py-4">
                            {engineer.Profesion}
                        </td>
                        <td className="px-6 py-4">
                            {engineer.NServicios_Hechos}
                        </td>
                        <td className="px-6 py-4">
                            <Link to={`/HomePage/Engineers/${engineer._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default EngineersCompleteList