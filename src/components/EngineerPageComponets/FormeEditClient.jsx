import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom';
import BackButton from '../GeneralComponents/BackButton';

function FormNewClient() {
    const[loading,setLoading] =useState(false);
    const navigate=useNavigate(true);
    const[nombre,setNombre] = useState('');
    const[RUC,setRUC] = useState('');
    const[Rubro,setRubro] = useState('');
    const[RepresentanteNombre,setRepresentanteNombre] = useState('');
    const[RepresentanteApellido,setRepresentanteApellido] = useState('');
    const[RepresentanteDNI,setRepresentanteDNI] = useState('');
    const[RepresentanteCargo,setRepresentanteCargo] = useState('');

    const {id}=useParams();
    useEffect(() => {
            setLoading(true);
            axios.get(`http://localhost:5555/clients/${id}`)
            .then((response)=>{
                setNombre(response.data.nombre);
                setRUC(response.data.RUC);
                setRubro(response.data.Rubro);
                setRepresentanteNombre(response.data.Representante.nombre);
                setRepresentanteApellido(response.data.Representante.apellido);
                setRepresentanteDNI(response.data.Representante.DNI);
                setRepresentanteCargo(response.data.Representante.cargo)
            }).catch((error)=>{
                setLoading(false);
                alert('An error hapenned')
                console.log(error);
            })
        }
    ,[])

    const handleEditClient=()=>{
        const data={
            nombre:nombre,
            RUC:RUC,
            Rubro:Rubro,
            Representante:{ 
                nombre:RepresentanteNombre,
                apellido:RepresentanteApellido,
                DNI:RepresentanteDNI,
                cargo:RepresentanteCargo,
            }
        };
        setLoading(true);
        axios.put(`http://localhost:5555/clients/${id}`,data,{
            timeout: 5000
        })
        .then(()=>{
            setLoading(false);
            navigate('/HomePage/Clients')
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);
            alert(error)
        })
    }


    const deleteClient=()=>{
        setLoading(false);
        axios.delete(`http://localhost:5555/clients/${id}`,{
            timeout: 5000
        })
        .then(()=>{
            setLoading(false);
            navigate('/HomePage/Clients')
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);
            alert(error)
        })
    }

  return (
    <div className='bg-slate-400 p-4 rounded-2xl text-center'>
        <div className="grid gap-6 mb-6 md:grid-cols-2 text-left ">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Empresa</label>
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RUC</label>
                <input type="number" value={RUC} onChange={(e)=>setRUC(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rubro</label>
                <input type="text" value={Rubro} onChange={(e)=>setRubro(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
            </div>  
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
        </div>
        <p className="text-lg font-normal text-black-300 lg:text-xl sm:px-16 lg:px-48 my-4">Representante</p>  
        <div className="grid gap-6 mb-6 md:grid-cols-2 text-left">
            <div> 
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" value={RepresentanteNombre} onChange={(e)=>setRepresentanteNombre(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text" value={RepresentanteApellido} onChange={(e)=>setRepresentanteApellido(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DNI</label>
                <input type="number" value={RepresentanteDNI} onChange={(e)=>setRepresentanteDNI(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
            </div>  
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargo</label>
                <input type="text" value={RepresentanteCargo} onChange={(e)=>setRepresentanteCargo(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
                <BackButton destinations={"clients"}/>
                <button onClick={handleEditClient} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar Datos</button>
                <button onClick={deleteClient} className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar Cliente</button>
        </div>
        
    </div>

  )
}

export default FormNewClient