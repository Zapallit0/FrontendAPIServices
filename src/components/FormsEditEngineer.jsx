import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
import Spinner from './spinner';
import BackButton from './GeneralComponents/BackButton';

const FormsEditEngineer=()=> {
    const [loading, setLoading]=useState(false);
    const navigate=useNavigate(true);
    const[nombre,setNombre]=useState('')
    const[apellido,setApellido]=useState('')
    const[DNI,setDNI]=useState('')
    const[NColegioIng,setColegioIng]=useState('')
    const[Profesion,setProfesion]=useState('')
    const[Grado,setGrado]=useState('')
    const {id}=useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/Engineers/${id}`)
        .then((response)=>{
          setNombre(response.data.nombre);
          setApellido(response.data.apellido);
          setDNI(response.data.DNI);
          setColegioIng(response.data.NColegioIng);
          setProfesion(response.data.Profesion);
          setGrado(response.data.Grado);
          setLoading(false);
        }).catch((error)=>{
          setLoading(false);
          alert('An error happened');
          console.error(error);
        })
    },[])
    const deleteEngineer=()=>{
        setLoading(true);
        axios
          .delete(`http://localhost:5555/engineers/${id}`)
          .then(()=>{
            setLoading(false);
            navigate('/HomePage/Engineers');
          })
          .catch((error)=>{
            setLoading(false);
            alert('An error happened. Please Check de console');
            console.log(error)
          })
      }
    const handleNewIng=() =>{
        const data={
        nombre,
        apellido,
        DNI,
        NColegioIng,
        Profesion,
        Grado
        };
        setLoading(true);
        axios.put(`http://localhost:5555/engineers/${id}`,data,{
            timeout: 5000
        })
        .then(()=>{
            setLoading(false);
            navigate('/HomePage/Engineers')
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error)
            alert(error)
        })
    }
  return (
    <div className='bg-slate-400 p-4'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            {loading ?<Spinner />:''}
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Julian" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text"  value={apellido} onChange={(e)=>setApellido(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
            </div>
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DNI</label>
                <input type="text" value={DNI} onChange={(e)=>setDNI(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00000000" required />
            </div>  
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NColegio de Ingenieros</label>
                <input type="text" value={NColegioIng} onChange={(e)=>setColegioIng(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
            </div>
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profesión</label>
                <input type="text" value={Profesion} onChange={(e)=>setProfesion(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingeniero de .." required />
            </div>
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grado</label>
                <input type="text" value={Grado} onChange={(e)=>setGrado(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Master, Doctorado" required />
            </div>
        </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <BackButton destinations={"engineers"}/>
                <button onClick={handleNewIng} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar Datos</button>
                <button onClick={deleteEngineer} className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Borrar Ingeniero</button>
            </div>
        </div>

  )
}

export default FormsEditEngineer