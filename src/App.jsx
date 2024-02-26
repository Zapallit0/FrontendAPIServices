import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBooks.jsx'
import ShowBook from './pages/ShowBook.jsx'
import EditBook from './pages/EditBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import Before2000Book from './pages/Before2000Book.jsx'
//SafetyAdvisors
import MainPage from './pages/MainPage.jsx'
import EngineersPage from './pages/EngineersPage.jsx'
import FormNewEngineer from './pages/CreateEngineer.jsx'
import EditEngineer from './pages/EditEngineer.jsx'

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/before2000' element={<Before2000Book />} />

    {/* Paginas de Safety Advisors*/}
      <Route path='/HomePage' element={<MainPage/>}/>
      <Route path='/HomePage/Engineers' element={<EngineersPage />}/>
      <Route path='/HomePage/Engineers/Add' element={<FormNewEngineer />} />
      <Route path='/HomePage/Engineers/:id' element={<EditEngineer/>}/>
    </Routes>
  )
}

export default App