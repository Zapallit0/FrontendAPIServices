import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from '../spinner';

function ClientsList() {
    const[clients,setClients]=useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios.get("http://localhost:5555/clients")
        .then((response)=>{
            setClients(response.data.clients);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setClients(false);
        })
    },[])
  return (
        <div className="relative overflow-x-auto mb-4 rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-800">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rubro
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Representante
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Servicios Pedidos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    loading?(<Spinner />):clients.map((client,index) => (
                        <tr key={index} className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {client.nombre}
                            </th>
                            <td className="px-6 py-4">
                                {client.Rubro}
                            </td>
                            <td className="px-6 py-4">
                                {client.Representante.nombre}
                            </td>
                            <td className="px-6 py-4">
                                {client.Servicios_Pedidos}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

  )
}

export default ClientsList