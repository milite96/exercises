
import './App.css'
import GithubUsers from './components/GithubUsers'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowGitHubUser from './components/ShowGitHubUser'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element />
      < Route path='/users/:username' element={<ShowGitHubUser />}/>
      <GithubUsers/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
