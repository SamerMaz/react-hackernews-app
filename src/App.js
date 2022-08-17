import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import News from './pages/new';
import Jobs from './pages/jobs';
import Navbar from './components/header';
function App() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
    </Routes>
    </>
  );
}

export default App;
