import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Masters() {
    const[masters,setMasters]=useState();
    useEffect(()=>{
        axios.get("http://localhost:5555/engineers/Masters")
        .then((response)=>{
            setMasters(response.data.count)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <Link href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Ingenieros Con Masters</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{masters}</p>
        </div>
    )
}

export default Masters