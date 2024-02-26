import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from './spinner';

const FormsNewEngineer=()=> {
    const [loading, setLoading]=useState(false);
    const navigate=useNavigate(true);
    const[nombre,setNombre]=useState('')
    const[apellido,setApellido]=useState('')
    const[DNI,setDNI]=useState('')
    const[NColegioIng,setColegioIng]=useState('')
    const[Profesion,setProfesion]=useState('')
    const[Grado,setGrado]=useState('')
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
        axios.post('http://localhost:5555/engineers',data,{
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
        {/* <div className="mb-6">
            <label "email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div className="mb-6">
            <label "password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div className="mb-6">
            <label "confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label "remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div> */}
        <button onClick={handleNewIng} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
    </div>

  )
}

export default FormsNewEngineer