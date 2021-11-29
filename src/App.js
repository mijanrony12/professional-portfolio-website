
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homes/Home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div >
      <BrowserRouter>
           <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="home" element={<Home/>}/>
                   <Route path="contact" element={<Contact/>}/>
            </Routes>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
