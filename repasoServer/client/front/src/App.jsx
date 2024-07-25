import './App.css'
import Home from '../views/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ViewUsers from '../views/ViewUsers';
import Error404 from '../views/Error404';
import ViewUser from '../views/ViewUser';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<ViewUsers />} />
      <Route path='/users/:id' element={<ViewUser />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
