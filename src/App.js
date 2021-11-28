
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homes/Home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <BrowserRouter>
           <Routes>
                   <Route path="" element={<Home></Home>}/>
                   <Route path="/home" element={<Home></Home>}/>
            </Routes>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
