import './App.css'
import CurrentLocation from './components/CurrentLocation'
import GitHubUsers from './components/GitHubUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './Header'
import GitHubUserRouter from './components/GitHubUserRouter'
import ErrorNotFound from './components/ErrorNotFound'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location' element={<CurrentLocation />} />
        <Route path='/users' element={<GitHubUsers />} />
        <Route path='/users/:username' element={<GitHubUserRouter />}/>
        <Route path='*' element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App