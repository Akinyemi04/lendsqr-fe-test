import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Userinfo from './Components/Userinfo';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Signin/>}/>
        <Route path='/User/:id' element={<Userinfo/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
