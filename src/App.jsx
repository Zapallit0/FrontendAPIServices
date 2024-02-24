import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBooks.jsx'
import ShowBook from './pages/ShowBook.jsx'
import EditBook from './pages/EditBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import Before2000Book from './pages/Before2000Book.jsx'
import HomePage from './pages/PagesSafetyAdvisors/HomePage.jsx'
import Services from './pages/PagesSafetyAdvisors/Services.jsx'
function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/before2000' element={<Before2000Book />} />
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/HomePage/Engineers' element={<Services />}/>
    </Routes>
  )
}

export default App