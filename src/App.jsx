import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Live } from './components/Live';
import './App.css';

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='Live' element={ <Live />} />
    </Routes>
    </>
  )
}

export default App;