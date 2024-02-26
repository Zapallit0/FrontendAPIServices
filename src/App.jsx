import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/BooksTemplates/Home.jsx'
import CreateBook from './pages/BooksTemplates/CreateBooks.jsx'
import ShowBook from './pages/BooksTemplates/ShowBook.jsx'
import EditBook from './pages/BooksTemplates/EditBook.jsx'
import DeleteBook from './pages/BooksTemplates/DeleteBook.jsx'
import Before2000Book from './pages/BooksTemplates/Before2000Book.jsx'

//SafetyAdvisors
import MainPage from './pages/MainPage.jsx'
//Ingenieros
import EngineersPage from './pages/EngineersPage.jsx'
import FormNewEngineer from './pages/CreateEngineer.jsx'
import EditEngineer from './pages/EditEngineer.jsx'

//Clientes
import ClientsPage from './pages/ClientsPage.jsx' 
import EditClient from './pages/EditClient.jsx'
import CreateClient from './pages/CreateClient.jsx'

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

      {/* Rutas Ingenieros */}
      <Route path='/HomePage/Engineers' element={<EngineersPage />}/>
      <Route path='/HomePage/Engineers/Add' element={<FormNewEngineer />} />
      <Route path='/HomePage/Engineers/:id' element={<EditEngineer/>}/>
      
      {/* Rutas Clientes */}
      <Route path='/HomePage/Clients' element={<ClientsPage/>}/>
      <Route path='/HomePage/Clients/Add' element={<CreateClient/>} />
      <Route path='/HomePage/Clients/:id' element={<EditClient />} />
    </Routes>
  )
}

export default App