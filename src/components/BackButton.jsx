import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

function BackButton({destinations='/HomePage/Engineers'}) {
  return (
    <div className='flex'>
      <Link to={destinations} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className='text-2x1' />
      </Link>BackButton</div>
  )
}

export default BackButton